import { EventEmitter } from 'events';

const emitter = new EventEmitter();

export const setTransparent = (transparent: boolean) => {
  emitter.emit('change', transparent);
};

export const addTransparentChangeListener = (callback: (transparent: boolean) => void) => {
  emitter.on('change', callback);
};

export const removeTransparentChangeListener = (callback: (transparent: boolean) => void) => {
  emitter.off('change', callback);
};