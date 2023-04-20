"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.addComment = exports.getComments = void 0;
const comment_1 = __importDefault(require("../../models/comment"));
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield comment_1.default.find();
        res.status(200).json({ comments });
    }
    catch (error) {
        throw error;
    }
});
exports.getComments = getComments;
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const comment = new comment_1.default({
            remark: body.remark,
            bookId: body.bookId,
        });
        const newComment = yield comment.save();
        const allComments = yield comment_1.default.find();
        res.status(201).json({ message: 'Comment added', comment: newComment, comments: allComments });
    }
    catch (error) {
        throw error;
    }
});
exports.addComment = addComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedComment = yield comment_1.default.findByIdAndRemove(req.params.id);
        const allComments = yield comment_1.default.find();
        res.status(200).json({
            message: 'Comment deleted',
            comment: deletedComment,
            comments: allComments,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteComment = deleteComment;
