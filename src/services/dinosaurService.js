// src/services/dinosaurService.js
import { db } from '../firebase/firebase.js'; import {
    ref,
    get,
    push,
    remove,
    child
} from 'firebase/database';

const PATH = 'creatures';

// Obtener todas las criaturas
export const getCreatures = async () => {
    const snapshot = await get(ref(db, PATH));
    if (!snapshot.exists()) return [];
    const data = snapshot.val();
    return Object.entries(data).map(([id, value]) => ({ id, ...value }));
};

// Añadir una criatura
export const addCreature = async (creature) => {
    return await push(ref(db, PATH), creature);
};

// Importar varias a la vez
export const importCreatures = async (creatures) => {
    for (const creature of creatures) {
        await push(ref(db, PATH), creature);
    }
};

// Borrar una criatura
export const deleteCreature = async (id) => {
    await remove(ref(db, PATH + '/' + id));
};