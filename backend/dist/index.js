"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandler_1 = require("./middleware/errorHandler");
const requestLogger_1 = require("./middleware/requestLogger");
const routes_1 = __importDefault(require("./routes"));
const logger_1 = __importDefault(require("./config/logger"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use((0, helmet_1.default)()); // Security headers
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
}));
// Request logging
app.use(requestLogger_1.requestLogger);
app.use((0, morgan_1.default)('dev')); // HTTP request logging
app.use(express_1.default.json()); // Parse JSON bodies
// Routes
app.use('/api', routes_1.default);
// Error handling
app.use(errorHandler_1.errorHandler);
// Start server
app.listen(port, () => {
    logger_1.default.info(`Server is running on port ${port}`);
    logger_1.default.info(`Environment: ${process.env.NODE_ENV}`);
    logger_1.default.info(`CORS origin: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
});
