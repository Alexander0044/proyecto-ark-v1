// src/utils/importExport.js

export const exportToJSON = (creatures) => {
  const json = JSON.stringify(creatures, null, 2);
  downloadFile(json, 'datos.json', 'application/json');
};

export const exportToCSV = (creatures) => {
  if (!creatures.length) return;
  const headers = Object.keys(creatures[0]).filter(k => k !== 'id');
  const rows = creatures.map(c =>
    headers.map(h => `"${String(c[h] ?? '').replace(/"/g, '""')}"`).join(',')
  );
  const csv = [headers.join(','), ...rows].join('\n');
  downloadFile(csv, 'datos.csv', 'text/csv');
};

export const exportToXML = (creatures) => {
  const items = creatures.map(c => {
    const fields = Object.entries(c)
      .filter(([k]) => k !== 'id')
      .map(([k, v]) => `    <${k}>${v}</${k}>`)
      .join('\n');
    return `  <creature>\n${fields}\n  </creature>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<creatures>\n${items.join('\n')}\n</creatures>`;
  downloadFile(xml, 'datos.xml', 'application/xml');
};

export const parseJSON = (text) => {
  const data = JSON.parse(text);
  return Array.isArray(data) ? data : [data];
};

export const parseCSV = (text) => {
  const [headerLine, ...lines] = text.trim().split('\n');
  const headers = headerLine.split(',').map(h => h.trim());
  return lines.map(line => {
    const values = line.match(/(".*?"|[^,]+)/g) || [];
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = (values[i] ?? '').replace(/^"|"$/g, '').trim();
    });
    return obj;
  });
};

export const parseXML = (text) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, 'application/xml');
  const items = xmlDoc.querySelectorAll('creature');
  return Array.from(items).map(item => {
    const obj = {};
    Array.from(item.children).forEach(child => {
      obj[child.tagName] = child.textContent;
    });
    return obj;
  });
};

const downloadFile = (content, filename, type) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};