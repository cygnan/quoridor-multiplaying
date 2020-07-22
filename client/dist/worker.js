var worker =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/agent.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/agent.worker.ts":
/*!*****************************!*\
  !*** ./src/reception.worker.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quoridor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quoridor_core */ \"./src/quoridor_core.ts\");\n/* harmony import */ var _agents_agent_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agents/agent_list */ \"./src/agents/agent_list.ts\");\n// The following repository was useful for writing WebWorker code.\n// https://github.com/Qwaz/webworker-with-typescript/tree/master/multiple-entry\n\n\nconst ctx = self;\nctx.addEventListener('message', message => {\n    const [state_raw, agent_name] = message.data;\n    const state = _quoridor_core__WEBPACK_IMPORTED_MODULE_0__[\"State\"].prototype.clone.apply(state_raw); // State instance should be re-created\n    const agent = _agents_agent_list__WEBPACK_IMPORTED_MODULE_1__[\"agent_list\"][agent_name];\n    // const cpu_act = agent(state);\n    const cpu_act = agent(state);\n    ctx.postMessage([cpu_act, state.turn]);\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/reception.worker.ts?");

/***/ }),

/***/ "./src/agents/agent_list.ts":
/*!**********************************!*\
  !*** ./src/agents/agent_list.ts ***!
  \**********************************/
/*! exports provided: agent_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"agent_list\", function() { return agent_list; });\n/* harmony import */ var _alphabeta_alphabeta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alphabeta/alphabeta */ \"./src/agents/alphabeta/alphabeta.ts\");\n// import {naiveAgent} from \"./naive/naive\"\n\nconst agent_list = {\n    // \"Manual\": null,\n    \"CPU Lv.1\": (state) => { return Object(_alphabeta_alphabeta__WEBPACK_IMPORTED_MODULE_0__[\"alphaBetaAgent\"])(state, 1); },\n    \"CPU Lv.2\": (state) => { return Object(_alphabeta_alphabeta__WEBPACK_IMPORTED_MODULE_0__[\"alphaBetaAgent\"])(state, 2); },\n    \"CPU Lv.3\": (state) => { return Object(_alphabeta_alphabeta__WEBPACK_IMPORTED_MODULE_0__[\"alphaBetaAgent\"])(state, 3); },\n    \"CPU Lv.4\": (state) => { return Object(_alphabeta_alphabeta__WEBPACK_IMPORTED_MODULE_0__[\"alphaBetaAgent\"])(state, 4); },\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/agents/agent_list.ts?");

/***/ }),

/***/ "./src/agents/alphabeta/alphabeta.ts":
/*!*******************************************!*\
  !*** ./src/agents/alphabeta/alphabeta.ts ***!
  \*******************************************/
/*! exports provided: alphaBetaAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"alphaBetaAgent\", function() { return alphaBetaAgent; });\n/* harmony import */ var _quoridor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../quoridor_core */ \"./src/quoridor_core.ts\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ \"./src/agents/common.ts\");\n\n\nfunction shuffle(acts) {\n    for (let i = 0; i < acts.length; i++) {\n        const k = Math.floor(Math.random() * (i + 1));\n        const temp = acts[i];\n        acts[i] = acts[k];\n        acts[k] = temp;\n    }\n}\nfunction search(state, depth, alpha, beta, maximize, cpuTurn, first) {\n    if (depth == 0) {\n        const score = -Object(_common__WEBPACK_IMPORTED_MODULE_1__[\"shortestPath\"])(state, cpuTurn) + Object(_common__WEBPACK_IMPORTED_MODULE_1__[\"shortestPath\"])(state, 1 - cpuTurn);\n        return [score, -1];\n    }\n    const winner = Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_0__[\"isGameOver\"])(state);\n    if (winner >= 0) {\n        if (winner == cpuTurn)\n            return [+1000, -1];\n        else\n            return [-1000, -1];\n    }\n    const acts = Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_0__[\"getCandidateActs\"])(state);\n    if (first)\n        shuffle(acts);\n    let value = maximize ? -1e9 : +1e9;\n    let best_act = null;\n    for (let act of acts) {\n        let nstate = state.clone();\n        Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_0__[\"applyAct\"])(nstate, act);\n        const [score, _] = search(nstate, depth - 1, alpha, beta, !maximize, cpuTurn, false);\n        if (maximize) {\n            // value = Math.max(value, score);\n            if (value < score) {\n                value = score;\n                best_act = act;\n            }\n            alpha = Math.max(alpha, score);\n        }\n        else {\n            // value = Math.min(value, score);\n            if (value > score) {\n                value = score;\n                best_act = act;\n            }\n            beta = Math.min(beta, score);\n        }\n        if (alpha >= beta)\n            break;\n    }\n    return [value, best_act];\n}\nfunction alphaBetaAgent(state, depth) {\n    const [_, act] = search(state, depth, -1e9, +1e9, true, state.turn, true);\n    return act;\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/agents/alphabeta/alphabeta.ts?");

/***/ }),

/***/ "./src/agents/common.ts":
/*!******************************!*\
  !*** ./src/agents/common.ts ***!
  \******************************/
/*! exports provided: shortestPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shortestPath\", function() { return shortestPath; });\n/* harmony import */ var _quoridor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quoridor_core */ \"./src/quoridor_core.ts\");\n\nfunction shortestPath(state, player) {\n    let q = [[state.poses[player], 0]];\n    let visited = new Int8Array(17 * 17).fill(0);\n    while (q.length > 0) {\n        let [now, steps] = q.shift();\n        if (visited[now])\n            continue;\n        visited[now] = 1;\n        if (player == 0 && now < 17)\n            return steps;\n        if (player == 1 && now >= 16 * 17)\n            return steps;\n        for (let r = 0; r < 4; r++) {\n            const sub = Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_0__[\"movedPos\"])(now, r);\n            if (sub < 0 || state.field[sub] >= 0)\n                continue; // wall\n            const next = Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_0__[\"movedPos\"])(sub, r);\n            if (visited[next])\n                continue;\n            q.push([next, steps + 1]);\n        }\n    }\n    // unreachable\n    return 1e6;\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/agents/common.ts?");

/***/ }),

/***/ "./src/quoridor_core.ts":
/*!******************************!*\
  !*** ./src/quoridor_core.ts ***!
  \******************************/
/*! exports provided: movedPos, State, decomposeAct, getCandidateActs, checkReachability, applyAct, isGameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movedPos\", function() { return movedPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decomposeAct\", function() { return decomposeAct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCandidateActs\", function() { return getCandidateActs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkReachability\", function() { return checkReachability; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyAct\", function() { return applyAct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isGameOver\", function() { return isGameOver; });\nconst g_dir = [-1, -17, 1, 17];\nfunction movedPos(pos, direction) {\n    if (direction == 0 && pos % 17 == 0)\n        return -1;\n    if (direction == 2 && pos % 17 == 16)\n        return -1;\n    pos += g_dir[direction];\n    if (pos < 0 || pos >= 17 * 17)\n        return -1;\n    return pos;\n}\nclass State {\n    constructor(initial_turn) {\n        this.field = new Int8Array(17 * 17).fill(-1);\n        this.turn = initial_turn;\n        this.walls = [10, 10];\n        this.poses = [16 * 17 + 8, 0 * 17 + 8]; // [black, white]\n    }\n    toString() {\n        let s = \"\";\n        for (let y = 0; y < 17; y++) {\n            for (let x = 0; x < 17; x++) {\n                let c = this.field[y * 17 + x];\n                if (y % 2 == 1 && x % 2 == 1) {\n                    // none\n                    s += \" \";\n                }\n                else if (y % 2 == 1 || x % 2 == 1) {\n                    // wall or floor\n                    s += (c == -1) ? \".\" : \"#\";\n                }\n                else {\n                    // piece or floor\n                    if (c == -1)\n                        s += \".\";\n                    if (c == 0)\n                        s += \"B\";\n                    if (c == 1)\n                        s += \"W\";\n                }\n            }\n            s += \"\\n\";\n        }\n        s += `W:${this.walls[1]} / B:${this.walls[0]}`;\n        return s;\n    }\n    clone() {\n        let s = new State(0);\n        s.field.set(this.field);\n        s.turn = this.turn;\n        s.walls = [...this.walls];\n        s.poses = [...this.poses];\n        return s;\n    }\n}\nfunction decomposeAct(act) {\n    const y = Math.floor(act / 17), x = act % 17;\n    return [y, x];\n}\nfunction getCandidateActs(state) {\n    let acts = [];\n    const pos = state.poses[state.turn];\n    // piece move\n    for (let r = 0; r < 4; r++) {\n        const a1pos = movedPos(pos, r);\n        if (a1pos < 0 || state.field[a1pos] >= 0)\n            continue;\n        const a2pos = movedPos(a1pos, r);\n        if (a2pos != state.poses[1 - state.turn]) {\n            // destination is empty\n            acts.push(a2pos);\n        }\n        else {\n            // destination is occupied by the opponent\n            const a3pos = movedPos(a2pos, r);\n            if (a3pos < 0 || state.field[a3pos] >= 0) {\n                // wall exists behind the opponent\n                for (let turn = 1; turn <= 3; turn += 2) {\n                    const r2 = (r + turn) % 4;\n                    const a2t1pos = movedPos(a2pos, r2);\n                    const a2t2pos = movedPos(a2t1pos, r2);\n                    if (a2t1pos < 0 || state.field[a2t1pos] >= 0)\n                        continue;\n                    if (state.field[a2t2pos] >= 0)\n                        continue;\n                    acts.push(a2t2pos);\n                }\n            }\n            else {\n                // we can jump across the opponent\n                const a4pos = movedPos(a3pos, r);\n                acts.push(a4pos);\n            }\n        }\n    }\n    // wall placement\n    if (state.walls[state.turn] >= 1) {\n        for (let y = 0; y < 17; y++) {\n            candidate_loop: for (let x = (y + 1) % 2; x < 17; x += 2) {\n                const dir = (y % 2 == 0) ? 3 : 2;\n                // the position must not be occupied\n                let places = [];\n                let now = y * 17 + x;\n                for (let i = 0; i < 3; i++) {\n                    places.push(now);\n                    if (now < 0 || state.field[now] >= 0)\n                        continue candidate_loop;\n                    now = movedPos(now, dir);\n                }\n                // temporarily fill the space\n                for (let i = 0; i < 3; i++)\n                    state.field[places[i]] = 6;\n                // check if the reachability condition holds after placement\n                if (checkReachability(state)) {\n                    acts.push(y * 17 + x);\n                }\n                // revert the filled space\n                for (let i = 0; i < 3; i++)\n                    state.field[places[i]] = -1;\n            }\n        }\n    }\n    return acts;\n}\nfunction checkReachability(state) {\n    loop_player: for (let p = 0; p <= 1; p += 1) {\n        let q = [state.poses[p]];\n        let visited = new Int8Array(17 * 17).fill(0);\n        while (q.length > 0) {\n            const now = q.pop();\n            if (visited[now])\n                continue;\n            visited[now] = 1;\n            if (p == 0 && now < 17)\n                continue loop_player;\n            if (p == 1 && now >= 16 * 17)\n                continue loop_player;\n            for (let r = 0; r < 4; r++) {\n                const sub = movedPos(now, r);\n                if (sub < 0 || state.field[sub] >= 0)\n                    continue; // wall\n                const next = movedPos(sub, r);\n                if (visited[next])\n                    continue;\n                q.push(next);\n            }\n        }\n        // unreachable\n        return false;\n    }\n    return true;\n}\nfunction applyAct(state, act) {\n    const [y, x] = decomposeAct(act);\n    if (x % 2 == 0 && y % 2 == 0) {\n        // piece movement\n        state.poses[state.turn] = act;\n    }\n    else if (x % 2 != y % 2) {\n        // wall placement\n        state.walls[state.turn]--;\n        const dir = (y % 2 == 0) ? 3 : 2;\n        let now = act;\n        for (let i = 0; i < 3; i++) {\n            state.field[now] = 9;\n            now = movedPos(now, dir);\n        }\n    }\n    state.turn = 1 - state.turn;\n}\nfunction isGameOver(state) {\n    if (state.poses[0] < 17) {\n        return 0;\n    }\n    else if (state.poses[1] >= 16 * 17) {\n        return 1;\n    }\n    return -1;\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/quoridor_core.ts?");

/***/ })

/******/ });