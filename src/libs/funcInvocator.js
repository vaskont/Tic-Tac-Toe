const funcs = {};

export const register = (name, func) => {
    funcs[name] = func;
};

export const invoke = (name, ...params) => { 
    if (funcs[name]) {
        return funcs[name](...params); 
    }
}
