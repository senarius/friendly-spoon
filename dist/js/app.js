"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1', routes_1.default);
// MONGODB_URI=mongodb+srv://senariuss:mongodb159753@cluster0.afou67u.mongodb.net/app1db?retryWrites=true&w=majority
// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.afou67u.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const uri = `mongodb+srv://senariuss:mongodb159753@cluster0.afou67u.mongodb.net/app1db?retryWrites=true&w=majority`;
mongoose_1.default
    .connect(uri)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch((error) => {
    throw error;
});
exports.default = app;
