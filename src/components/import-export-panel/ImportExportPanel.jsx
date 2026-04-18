// src/components/import-export-panel/ImportExportPanel.jsx
import { useRef, useState } from 'react';
import { importCreatures } from '../../services/dinosaurService';
import {
  exportToJSON, exportToCSV, exportToXML,
  parseJSON, parseCSV, parseXML
} from '../../utils/importExport';
import './ImportExportPanel.css';

export default function ImportExportPanel({ creatures, onImportDone }) {
  const fileInputRef = useRef(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // ─── EXPORT ───────────────────────────────────
  const handleExport = (format) => {
    if (!creatures.length) { setStatus('No hay datos para exportar.'); return; }
    if (format === 'json') exportToJSON(creatures);
    if (format === 'csv')  exportToCSV(creatures);
    if (format === 'xml')  exportToXML(creatures);
    setStatus(`✅ Exportado como datos.${format}`);
  };

  // ─── IMPORT ───────────────────────────────────
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text();
    const ext = file.name.split('.').pop().toLowerCase();

    let parsed = [];
    try {
      if (ext === 'json') parsed = parseJSON(text);
      else if (ext === 'csv') parsed = parseCSV(text);
      else if (ext === 'xml') parsed = parseXML(text);
      else { setStatus('❌ Formato no soportado. Usa JSON, CSV o XML.'); return; }
    } catch {
      setStatus('❌ Error al parsear el archivo. Revisa el formato.');
      return;
    }

    setLoading(true);
    try {
      await importCreatures(parsed);
      setStatus(`✅ ${parsed.length} dinosaurios importados a Firebase.`);
      onImportDone(); // recarga la lista
    } catch {
      setStatus('❌ Error al guardar en Firebase.');
    } finally {
      setLoading(false);
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="ie-panel">
      <h3 className="ie-title">📦 Importar / Exportar Dinosaurios</h3>

      <div className="ie-section">
        <p className="ie-label">⬇ Exportar datos actuales:</p>
        <div className="ie-buttons">
          <button onClick={() => handleExport('json')} className="ie-btn ie-export">JSON</button>
          <button onClick={() => handleExport('csv')}  className="ie-btn ie-export">CSV</button>
          <button onClick={() => handleExport('xml')}  className="ie-btn ie-export">XML</button>
        </div>
      </div>

      <div className="ie-section">
        <p className="ie-label">⬆ Importar desde archivo:</p>
        <label className="ie-btn ie-import" style={{ cursor: 'pointer' }}>
          {loading ? 'Importando...' : 'Seleccionar archivo (.json / .csv / .xml)'}
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,.csv,.xml"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            disabled={loading}
          />
        </label>
      </div>

      {status && <p className="ie-status">{status}</p>}
    </div>
  );
}