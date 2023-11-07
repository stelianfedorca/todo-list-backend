"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todosController = __importStar(require("../index"));
describe('Test getTodos', () => {
    it('should return the todos from database', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            query: {},
        };
        const res = {
            json: jest.fn(),
        };
        jest.spyOn(todosController, 'getTodos');
        const expectedResult = {
            data: [
                {
                    _id: '63e14df8d98acfa5947cd48e',
                    name: 'todo1',
                    description: 'desc1',
                    status: false,
                    createdAt: '2023-02-06T18:59:04.556Z',
                    updatedAt: '2023-02-06T18:59:04.556Z',
                    __v: 0,
                },
                {
                    _id: '63fb7cf6a7a54507e574334d',
                    name: 'Todo 2',
                    description: 'Description todo 2',
                    status: false,
                    createdAt: '2023-02-26T15:38:30.650Z',
                    updatedAt: '2023-02-26T15:38:30.650Z',
                    __v: 0,
                },
            ],
        };
        yield todosController.getTodos(req, res);
        expect(res.json).toHaveBeenCalledWith(expectedResult);
    }));
});
