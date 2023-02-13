"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // ../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/typeof.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  var init_typeof = __esm({
    "../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/typeof.js"() {
    }
  });

  // ../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var init_toPrimitive = __esm({
    "../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/toPrimitive.js"() {
      init_typeof();
    }
  });

  // ../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }
  var init_toPropertyKey = __esm({
    "../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"() {
      init_typeof();
      init_toPrimitive();
    }
  });

  // ../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/defineProperty.js
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var init_defineProperty = __esm({
    "../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/defineProperty.js"() {
      init_toPropertyKey();
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/batches/base-table-batch-aggregator.js
  var DEFAULT_ROW_COUNT, RowTableBatchAggregator;
  var init_base_table_batch_aggregator = __esm({
    "../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/batches/base-table-batch-aggregator.js"() {
      init_defineProperty();
      DEFAULT_ROW_COUNT = 100;
      RowTableBatchAggregator = class {
        constructor(schema, options) {
          _defineProperty(this, "schema", void 0);
          _defineProperty(this, "options", void 0);
          _defineProperty(this, "length", 0);
          _defineProperty(this, "rows", null);
          _defineProperty(this, "cursor", 0);
          _defineProperty(this, "_headers", []);
          this.options = options;
          this.schema = schema;
          if (!Array.isArray(schema)) {
            this._headers = [];
            for (const key in schema) {
              this._headers[schema[key].index] = schema[key].name;
            }
          }
        }
        rowCount() {
          return this.length;
        }
        addArrayRow(row, cursor) {
          if (Number.isFinite(cursor)) {
            this.cursor = cursor;
          }
          this.rows = this.rows || new Array(DEFAULT_ROW_COUNT);
          this.rows[this.length] = row;
          this.length++;
        }
        addObjectRow(row, cursor) {
          if (Number.isFinite(cursor)) {
            this.cursor = cursor;
          }
          this.rows = this.rows || new Array(DEFAULT_ROW_COUNT);
          this.rows[this.length] = row;
          this.length++;
        }
        getBatch() {
          let rows = this.rows;
          if (!rows) {
            return null;
          }
          rows = rows.slice(0, this.length);
          this.rows = null;
          const batch = {
            shape: this.options.shape,
            batchType: "data",
            data: rows,
            length: this.length,
            schema: this.schema,
            cursor: this.cursor
          };
          return batch;
        }
      };
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/utils/row-utils.js
  function convertToObjectRow(arrayRow, headers) {
    if (!arrayRow) {
      throw new Error("null row");
    }
    if (!headers) {
      throw new Error("no headers");
    }
    const objectRow = {};
    for (let i = 0; i < headers.length; i++) {
      objectRow[headers[i]] = arrayRow[i];
    }
    return objectRow;
  }
  function convertToArrayRow(objectRow, headers) {
    if (!objectRow) {
      throw new Error("null row");
    }
    if (!headers) {
      throw new Error("no headers");
    }
    const arrayRow = new Array(headers.length);
    for (let i = 0; i < headers.length; i++) {
      arrayRow[i] = objectRow[headers[i]];
    }
    return arrayRow;
  }
  var init_row_utils = __esm({
    "../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/utils/row-utils.js"() {
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/batches/row-table-batch-aggregator.js
  var DEFAULT_ROW_COUNT2, RowTableBatchAggregator2;
  var init_row_table_batch_aggregator = __esm({
    "../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/batches/row-table-batch-aggregator.js"() {
      init_defineProperty();
      init_row_utils();
      DEFAULT_ROW_COUNT2 = 100;
      RowTableBatchAggregator2 = class {
        constructor(schema, options) {
          _defineProperty(this, "schema", void 0);
          _defineProperty(this, "options", void 0);
          _defineProperty(this, "length", 0);
          _defineProperty(this, "objectRows", null);
          _defineProperty(this, "arrayRows", null);
          _defineProperty(this, "cursor", 0);
          _defineProperty(this, "_headers", []);
          this.options = options;
          this.schema = schema;
          if (!Array.isArray(schema)) {
            this._headers = [];
            for (const key in schema) {
              this._headers[schema[key].index] = schema[key].name;
            }
          }
        }
        rowCount() {
          return this.length;
        }
        addArrayRow(row, cursor) {
          if (Number.isFinite(cursor)) {
            this.cursor = cursor;
          }
          switch (this.options.shape) {
            case "object-row-table":
              const rowObject = convertToObjectRow(row, this._headers);
              this.addObjectRow(rowObject, cursor);
              break;
            case "array-row-table":
              this.arrayRows = this.arrayRows || new Array(DEFAULT_ROW_COUNT2);
              this.arrayRows[this.length] = row;
              this.length++;
              break;
          }
        }
        addObjectRow(row, cursor) {
          if (Number.isFinite(cursor)) {
            this.cursor = cursor;
          }
          switch (this.options.shape) {
            case "array-row-table":
              const rowArray = convertToArrayRow(row, this._headers);
              this.addArrayRow(rowArray, cursor);
              break;
            case "object-row-table":
              this.objectRows = this.objectRows || new Array(DEFAULT_ROW_COUNT2);
              this.objectRows[this.length] = row;
              this.length++;
              break;
          }
        }
        getBatch() {
          let rows = this.arrayRows || this.objectRows;
          if (!rows) {
            return null;
          }
          rows = rows.slice(0, this.length);
          this.arrayRows = null;
          this.objectRows = null;
          return {
            shape: this.options.shape,
            batchType: "data",
            data: rows,
            length: this.length,
            schema: this.schema,
            cursor: this.cursor
          };
        }
      };
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/batches/columnar-table-batch-aggregator.js
  var DEFAULT_ROW_COUNT3, ColumnarTableBatchAggregator;
  var init_columnar_table_batch_aggregator = __esm({
    "../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/batches/columnar-table-batch-aggregator.js"() {
      init_defineProperty();
      DEFAULT_ROW_COUNT3 = 100;
      ColumnarTableBatchAggregator = class {
        constructor(schema, options) {
          _defineProperty(this, "schema", void 0);
          _defineProperty(this, "length", 0);
          _defineProperty(this, "allocated", 0);
          _defineProperty(this, "columns", {});
          this.schema = schema;
          this._reallocateColumns();
        }
        rowCount() {
          return this.length;
        }
        addArrayRow(row) {
          this._reallocateColumns();
          let i = 0;
          for (const fieldName in this.columns) {
            this.columns[fieldName][this.length] = row[i++];
          }
          this.length++;
        }
        addObjectRow(row) {
          this._reallocateColumns();
          for (const fieldName in row) {
            this.columns[fieldName][this.length] = row[fieldName];
          }
          this.length++;
        }
        getBatch() {
          this._pruneColumns();
          const columns = Array.isArray(this.schema) ? this.columns : {};
          if (!Array.isArray(this.schema)) {
            for (const fieldName in this.schema) {
              const field = this.schema[fieldName];
              columns[field.name] = this.columns[field.index];
            }
          }
          this.columns = {};
          const batch = {
            shape: "columnar-table",
            batchType: "data",
            data: columns,
            schema: this.schema,
            length: this.length
          };
          return batch;
        }
        _reallocateColumns() {
          if (this.length < this.allocated) {
            return;
          }
          this.allocated = this.allocated > 0 ? this.allocated *= 2 : DEFAULT_ROW_COUNT3;
          this.columns = {};
          for (const fieldName in this.schema) {
            const field = this.schema[fieldName];
            const ArrayType = field.type || Float32Array;
            const oldColumn = this.columns[field.index];
            if (oldColumn && ArrayBuffer.isView(oldColumn)) {
              const typedArray = new ArrayType(this.allocated);
              typedArray.set(oldColumn);
              this.columns[field.index] = typedArray;
            } else if (oldColumn) {
              oldColumn.length = this.allocated;
              this.columns[field.index] = oldColumn;
            } else {
              this.columns[field.index] = new ArrayType(this.allocated);
            }
          }
        }
        _pruneColumns() {
          for (const [columnName, column] of Object.entries(this.columns)) {
            this.columns[columnName] = column.slice(0, this.length);
          }
        }
      };
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/batches/table-batch-builder.js
  var DEFAULT_OPTIONS, ERR_MESSAGE, TableBatchBuilder;
  var init_table_batch_builder = __esm({
    "../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/batches/table-batch-builder.js"() {
      init_defineProperty();
      init_base_table_batch_aggregator();
      init_row_table_batch_aggregator();
      init_columnar_table_batch_aggregator();
      DEFAULT_OPTIONS = {
        shape: "array-row-table",
        batchSize: "auto",
        batchDebounceMs: 0,
        limit: 0,
        _limitMB: 0
      };
      ERR_MESSAGE = "TableBatchBuilder";
      TableBatchBuilder = class {
        constructor(schema, options) {
          _defineProperty(this, "schema", void 0);
          _defineProperty(this, "options", void 0);
          _defineProperty(this, "aggregator", null);
          _defineProperty(this, "batchCount", 0);
          _defineProperty(this, "bytesUsed", 0);
          _defineProperty(this, "isChunkComplete", false);
          _defineProperty(this, "lastBatchEmittedMs", Date.now());
          _defineProperty(this, "totalLength", 0);
          _defineProperty(this, "totalBytes", 0);
          _defineProperty(this, "rowBytes", 0);
          this.schema = schema;
          this.options = {
            ...DEFAULT_OPTIONS,
            ...options
          };
        }
        limitReached() {
          var _this$options, _this$options2;
          if (Boolean((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.limit) && this.totalLength >= this.options.limit) {
            return true;
          }
          if (Boolean((_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2._limitMB) && this.totalBytes / 1e6 >= this.options._limitMB) {
            return true;
          }
          return false;
        }
        addRow(row) {
          if (this.limitReached()) {
            return;
          }
          this.totalLength++;
          this.rowBytes = this.rowBytes || this._estimateRowMB(row);
          this.totalBytes += this.rowBytes;
          if (Array.isArray(row)) {
            this.addArrayRow(row);
          } else {
            this.addObjectRow(row);
          }
        }
        addArrayRow(row) {
          if (!this.aggregator) {
            const TableBatchType = this._getTableBatchType();
            this.aggregator = new TableBatchType(this.schema, this.options);
          }
          this.aggregator.addArrayRow(row);
        }
        addObjectRow(row) {
          if (!this.aggregator) {
            const TableBatchType = this._getTableBatchType();
            this.aggregator = new TableBatchType(this.schema, this.options);
          }
          this.aggregator.addObjectRow(row);
        }
        chunkComplete(chunk2) {
          if (chunk2 instanceof ArrayBuffer) {
            this.bytesUsed += chunk2.byteLength;
          }
          if (typeof chunk2 === "string") {
            this.bytesUsed += chunk2.length;
          }
          this.isChunkComplete = true;
        }
        getFullBatch(options) {
          return this._isFull() ? this._getBatch(options) : null;
        }
        getFinalBatch(options) {
          return this._getBatch(options);
        }
        _estimateRowMB(row) {
          return Array.isArray(row) ? row.length * 8 : Object.keys(row).length * 8;
        }
        _isFull() {
          if (!this.aggregator || this.aggregator.rowCount() === 0) {
            return false;
          }
          if (this.options.batchSize === "auto") {
            if (!this.isChunkComplete) {
              return false;
            }
          } else if (this.options.batchSize > this.aggregator.rowCount()) {
            return false;
          }
          if (this.options.batchDebounceMs > Date.now() - this.lastBatchEmittedMs) {
            return false;
          }
          this.isChunkComplete = false;
          this.lastBatchEmittedMs = Date.now();
          return true;
        }
        _getBatch(options) {
          if (!this.aggregator) {
            return null;
          }
          if (options !== null && options !== void 0 && options.bytesUsed) {
            this.bytesUsed = options.bytesUsed;
          }
          const normalizedBatch = this.aggregator.getBatch();
          normalizedBatch.count = this.batchCount;
          normalizedBatch.bytesUsed = this.bytesUsed;
          Object.assign(normalizedBatch, options);
          this.batchCount++;
          this.aggregator = null;
          return normalizedBatch;
        }
        _getTableBatchType() {
          switch (this.options.shape) {
            case "row-table":
              return RowTableBatchAggregator;
            case "array-row-table":
            case "object-row-table":
              return RowTableBatchAggregator2;
            case "columnar-table":
              return ColumnarTableBatchAggregator;
            case "arrow-table":
              if (!TableBatchBuilder.ArrowBatch) {
                throw new Error(ERR_MESSAGE);
              }
              return TableBatchBuilder.ArrowBatch;
            default:
              throw new Error(ERR_MESSAGE);
          }
        }
      };
      _defineProperty(TableBatchBuilder, "ArrowBatch", void 0);
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/utils/async-queue.js
  var _Symbol$asyncIterator, ArrayQueue, AsyncQueue;
  var init_async_queue = __esm({
    "../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/lib/utils/async-queue.js"() {
      init_defineProperty();
      ArrayQueue = class extends Array {
        enqueue(value) {
          return this.push(value);
        }
        dequeue() {
          return this.shift();
        }
      };
      _Symbol$asyncIterator = Symbol.asyncIterator;
      AsyncQueue = class {
        constructor() {
          _defineProperty(this, "_values", void 0);
          _defineProperty(this, "_settlers", void 0);
          _defineProperty(this, "_closed", void 0);
          this._values = new ArrayQueue();
          this._settlers = new ArrayQueue();
          this._closed = false;
        }
        close() {
          while (this._settlers.length > 0) {
            this._settlers.dequeue().resolve({
              done: true
            });
          }
          this._closed = true;
        }
        [_Symbol$asyncIterator]() {
          return this;
        }
        enqueue(value) {
          if (this._closed) {
            throw new Error("Closed");
          }
          if (this._settlers.length > 0) {
            if (this._values.length > 0) {
              throw new Error("Illegal internal state");
            }
            const settler = this._settlers.dequeue();
            if (value instanceof Error) {
              settler.reject(value);
            } else {
              settler.resolve({
                value
              });
            }
          } else {
            this._values.enqueue(value);
          }
        }
        next() {
          if (this._values.length > 0) {
            const value = this._values.dequeue();
            if (value instanceof Error) {
              return Promise.reject(value);
            }
            return Promise.resolve({
              value
            });
          }
          if (this._closed) {
            if (this._settlers.length > 0) {
              throw new Error("Illegal internal state");
            }
            return Promise.resolve({
              done: true
            });
          }
          return new Promise((resolve, reject) => {
            this._settlers.enqueue({
              resolve,
              reject
            });
          });
        }
      };
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/index.js
  var init_esm = __esm({
    "../node_modules/.pnpm/@loaders.gl+schema@3.2.13/node_modules/@loaders.gl/schema/dist/esm/index.js"() {
      init_table_batch_builder();
      init_row_utils();
      init_async_queue();
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+csv@3.2.13/node_modules/@loaders.gl/csv/dist/esm/papaparse/papaparse.js
  function CsvToJson(_input, _config, UserDefinedStreamer) {
    _config = _config || {};
    var dynamicTyping = _config.dynamicTyping || false;
    if (isFunction2(dynamicTyping)) {
      _config.dynamicTypingFunction = dynamicTyping;
      dynamicTyping = {};
    }
    _config.dynamicTyping = dynamicTyping;
    _config.transform = isFunction2(_config.transform) ? _config.transform : false;
    if (_config.worker && Papa.WORKERS_SUPPORTED) {
      var w = newWorker();
      w.userStep = _config.step;
      w.userChunk = _config.chunk;
      w.userComplete = _config.complete;
      w.userError = _config.error;
      _config.step = isFunction2(_config.step);
      _config.chunk = isFunction2(_config.chunk);
      _config.complete = isFunction2(_config.complete);
      _config.error = isFunction2(_config.error);
      delete _config.worker;
      w.postMessage({
        input: _input,
        config: _config,
        workerId: w.id
      });
      return;
    }
    var streamer = null;
    if (typeof _input === "string") {
      streamer = new StringStreamer(_config);
    }
    if (!streamer) {
      streamer = new UserDefinedStreamer(_config);
    }
    return streamer.stream(_input);
  }
  function JsonToCsv(_input, _config) {
    var _quotes = false;
    var _writeHeader = true;
    var _delimiter = ",";
    var _newline = "\r\n";
    var _quoteChar = '"';
    var _escapedQuote = _quoteChar + _quoteChar;
    var _skipEmptyLines = false;
    var _columns = null;
    unpackConfig();
    var quoteCharRegex = new RegExp(escapeRegExp(_quoteChar), "g");
    if (typeof _input === "string")
      _input = JSON.parse(_input);
    if (Array.isArray(_input)) {
      if (!_input.length || Array.isArray(_input[0]))
        return serialize(null, _input, _skipEmptyLines);
      else if (typeof _input[0] === "object")
        return serialize(_columns || objectKeys(_input[0]), _input, _skipEmptyLines);
    } else if (typeof _input === "object") {
      if (typeof _input.data === "string")
        _input.data = JSON.parse(_input.data);
      if (Array.isArray(_input.data)) {
        if (!_input.fields)
          _input.fields = _input.meta && _input.meta.fields;
        if (!_input.fields)
          _input.fields = Array.isArray(_input.data[0]) ? _input.fields : objectKeys(_input.data[0]);
        if (!Array.isArray(_input.data[0]) && typeof _input.data[0] !== "object")
          _input.data = [_input.data];
      }
      return serialize(_input.fields || [], _input.data || [], _skipEmptyLines);
    }
    throw new Error("Unable to serialize unrecognized input");
    function unpackConfig() {
      if (typeof _config !== "object")
        return;
      if (typeof _config.delimiter === "string" && !Papa.BAD_DELIMITERS.filter(function(value) {
        return _config.delimiter.indexOf(value) !== -1;
      }).length) {
        _delimiter = _config.delimiter;
      }
      if (typeof _config.quotes === "boolean" || Array.isArray(_config.quotes))
        _quotes = _config.quotes;
      if (typeof _config.skipEmptyLines === "boolean" || typeof _config.skipEmptyLines === "string")
        _skipEmptyLines = _config.skipEmptyLines;
      if (typeof _config.newline === "string")
        _newline = _config.newline;
      if (typeof _config.quoteChar === "string")
        _quoteChar = _config.quoteChar;
      if (typeof _config.header === "boolean")
        _writeHeader = _config.header;
      if (Array.isArray(_config.columns)) {
        if (_config.columns.length === 0)
          throw new Error("Option columns is empty");
        _columns = _config.columns;
      }
      if (_config.escapeChar !== void 0) {
        _escapedQuote = _config.escapeChar + _quoteChar;
      }
    }
    function objectKeys(obj) {
      if (typeof obj !== "object")
        return [];
      var keys = [];
      for (var key in obj)
        keys.push(key);
      return keys;
    }
    function serialize(fields, data, skipEmptyLines) {
      var csv = "";
      if (typeof fields === "string")
        fields = JSON.parse(fields);
      if (typeof data === "string")
        data = JSON.parse(data);
      var hasHeader = Array.isArray(fields) && fields.length > 0;
      var dataKeyedByField = !Array.isArray(data[0]);
      if (hasHeader && _writeHeader) {
        for (var i = 0; i < fields.length; i++) {
          if (i > 0)
            csv += _delimiter;
          csv += safe(fields[i], i);
        }
        if (data.length > 0)
          csv += _newline;
      }
      for (var row = 0; row < data.length; row++) {
        var maxCol = hasHeader ? fields.length : data[row].length;
        var emptyLine = false;
        var nullLine = hasHeader ? Object.keys(data[row]).length === 0 : data[row].length === 0;
        if (skipEmptyLines && !hasHeader) {
          emptyLine = skipEmptyLines === "greedy" ? data[row].join("").trim() === "" : data[row].length === 1 && data[row][0].length === 0;
        }
        if (skipEmptyLines === "greedy" && hasHeader) {
          var line = [];
          for (var c = 0; c < maxCol; c++) {
            var cx = dataKeyedByField ? fields[c] : c;
            line.push(data[row][cx]);
          }
          emptyLine = line.join("").trim() === "";
        }
        if (!emptyLine) {
          for (var col = 0; col < maxCol; col++) {
            if (col > 0 && !nullLine)
              csv += _delimiter;
            var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
            csv += safe(data[row][colIdx], col);
          }
          if (row < data.length - 1 && (!skipEmptyLines || maxCol > 0 && !nullLine)) {
            csv += _newline;
          }
        }
      }
      return csv;
    }
    function safe(str, col) {
      if (typeof str === "undefined" || str === null)
        return "";
      if (str.constructor === Date)
        return JSON.stringify(str).slice(1, 25);
      str = str.toString().replace(quoteCharRegex, _escapedQuote);
      var needsQuotes = typeof _quotes === "boolean" && _quotes || Array.isArray(_quotes) && _quotes[col] || hasAny(str, Papa.BAD_DELIMITERS) || str.indexOf(_delimiter) > -1 || str.charAt(0) === " " || str.charAt(str.length - 1) === " ";
      return needsQuotes ? _quoteChar + str + _quoteChar : str;
    }
    function hasAny(str, substrings) {
      for (var i = 0; i < substrings.length; i++)
        if (str.indexOf(substrings[i]) > -1)
          return true;
      return false;
    }
  }
  function ChunkStreamer(config) {
    this._handle = null;
    this._finished = false;
    this._completed = false;
    this._input = null;
    this._baseIndex = 0;
    this._partialLine = "";
    this._rowCount = 0;
    this._start = 0;
    this._nextChunk = null;
    this.isFirstChunk = true;
    this._completeResults = {
      data: [],
      errors: [],
      meta: {}
    };
    replaceConfig.call(this, config);
    this.parseChunk = function(chunk2, isFakeChunk) {
      if (this.isFirstChunk && isFunction2(this._config.beforeFirstChunk)) {
        var modifiedChunk = this._config.beforeFirstChunk(chunk2);
        if (modifiedChunk !== void 0)
          chunk2 = modifiedChunk;
      }
      this.isFirstChunk = false;
      var aggregate = this._partialLine + chunk2;
      this._partialLine = "";
      var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);
      if (this._handle.paused() || this._handle.aborted())
        return;
      var lastIndex = results.meta.cursor;
      if (!this._finished) {
        this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
        this._baseIndex = lastIndex;
      }
      if (results && results.data)
        this._rowCount += results.data.length;
      var finishedIncludingPreview = this._finished || this._config.preview && this._rowCount >= this._config.preview;
      if (isFunction2(this._config.chunk) && !isFakeChunk) {
        this._config.chunk(results, this._handle);
        if (this._handle.paused() || this._handle.aborted())
          return;
        results = void 0;
        this._completeResults = void 0;
      }
      if (!this._config.step && !this._config.chunk) {
        this._completeResults.data = this._completeResults.data.concat(results.data);
        this._completeResults.errors = this._completeResults.errors.concat(results.errors);
        this._completeResults.meta = results.meta;
      }
      if (!this._completed && finishedIncludingPreview && isFunction2(this._config.complete) && (!results || !results.meta.aborted)) {
        this._config.complete(this._completeResults, this._input);
        this._completed = true;
      }
      if (!finishedIncludingPreview && (!results || !results.meta.paused))
        this._nextChunk();
      return results;
    };
    this._sendError = function(error) {
      if (isFunction2(this._config.error))
        this._config.error(error);
    };
    function replaceConfig(config2) {
      var configCopy = copy(config2);
      configCopy.chunkSize = parseInt(configCopy.chunkSize);
      if (!config2.step && !config2.chunk)
        configCopy.chunkSize = null;
      this._handle = new ParserHandle(configCopy);
      this._handle.streamer = this;
      this._config = configCopy;
    }
  }
  function StringStreamer(config) {
    config = config || {};
    ChunkStreamer.call(this, config);
    var remaining;
    this.stream = function(s) {
      remaining = s;
      return this._nextChunk();
    };
    this._nextChunk = function() {
      if (this._finished)
        return;
      var size = this._config.chunkSize;
      var chunk2 = size ? remaining.substr(0, size) : remaining;
      remaining = size ? remaining.substr(size) : "";
      this._finished = !remaining;
      return this.parseChunk(chunk2);
    };
  }
  function ParserHandle(_config) {
    var FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;
    var ISO_DATE = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
    var self2 = this;
    var _stepCounter = 0;
    var _rowCounter = 0;
    var _input;
    var _parser;
    var _paused = false;
    var _aborted = false;
    var _delimiterError;
    var _fields = [];
    var _results = {
      data: [],
      errors: [],
      meta: {}
    };
    if (isFunction2(_config.step)) {
      var userStep = _config.step;
      _config.step = function(results) {
        _results = results;
        if (needsHeaderRow())
          processResults();
        else {
          processResults();
          if (!_results.data || _results.data.length === 0)
            return;
          _stepCounter += results.data.length;
          if (_config.preview && _stepCounter > _config.preview)
            _parser.abort();
          else
            userStep(_results, self2);
        }
      };
    }
    this.parse = function(input, baseIndex, ignoreLastRow) {
      var quoteChar = _config.quoteChar || '"';
      if (!_config.newline)
        _config.newline = guessLineEndings(input, quoteChar);
      _delimiterError = false;
      if (!_config.delimiter) {
        var delimGuess = guessDelimiter(input, _config.newline, _config.skipEmptyLines, _config.comments, _config.delimitersToGuess);
        if (delimGuess.successful)
          _config.delimiter = delimGuess.bestDelimiter;
        else {
          _delimiterError = true;
          _config.delimiter = Papa.DefaultDelimiter;
        }
        _results.meta.delimiter = _config.delimiter;
      } else if (isFunction2(_config.delimiter)) {
        _config.delimiter = _config.delimiter(input);
        _results.meta.delimiter = _config.delimiter;
      }
      var parserConfig = copy(_config);
      if (_config.preview && _config.header)
        parserConfig.preview++;
      _input = input;
      _parser = new Parser(parserConfig);
      _results = _parser.parse(_input, baseIndex, ignoreLastRow);
      processResults();
      return _paused ? {
        meta: {
          paused: true
        }
      } : _results || {
        meta: {
          paused: false
        }
      };
    };
    this.paused = function() {
      return _paused;
    };
    this.pause = function() {
      _paused = true;
      _parser.abort();
      _input = _input.substr(_parser.getCharIndex());
    };
    this.resume = function() {
      _paused = false;
      self2.streamer.parseChunk(_input, true);
    };
    this.aborted = function() {
      return _aborted;
    };
    this.abort = function() {
      _aborted = true;
      _parser.abort();
      _results.meta.aborted = true;
      if (isFunction2(_config.complete))
        _config.complete(_results);
      _input = "";
    };
    function testEmptyLine(s) {
      return _config.skipEmptyLines === "greedy" ? s.join("").trim() === "" : s.length === 1 && s[0].length === 0;
    }
    function processResults() {
      if (_results && _delimiterError) {
        addError("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + Papa.DefaultDelimiter + "'");
        _delimiterError = false;
      }
      if (_config.skipEmptyLines) {
        for (var i = 0; i < _results.data.length; i++)
          if (testEmptyLine(_results.data[i]))
            _results.data.splice(i--, 1);
      }
      if (needsHeaderRow())
        fillHeaderFields();
      return applyHeaderAndDynamicTypingAndTransformation();
    }
    function needsHeaderRow() {
      return _config.header && _fields.length === 0;
    }
    function fillHeaderFields() {
      if (!_results)
        return;
      function addHeder(header) {
        if (isFunction2(_config.transformHeader))
          header = _config.transformHeader(header);
        _fields.push(header);
      }
      if (Array.isArray(_results.data[0])) {
        for (var i = 0; needsHeaderRow() && i < _results.data.length; i++)
          _results.data[i].forEach(addHeder);
        _results.data.splice(0, 1);
      } else
        _results.data.forEach(addHeder);
    }
    function shouldApplyDynamicTyping(field) {
      if (_config.dynamicTypingFunction && _config.dynamicTyping[field] === void 0) {
        _config.dynamicTyping[field] = _config.dynamicTypingFunction(field);
      }
      return (_config.dynamicTyping[field] || _config.dynamicTyping) === true;
    }
    function parseDynamic(field, value) {
      if (shouldApplyDynamicTyping(field)) {
        if (value === "true" || value === "TRUE")
          return true;
        else if (value === "false" || value === "FALSE")
          return false;
        else if (FLOAT.test(value))
          return parseFloat(value);
        else if (ISO_DATE.test(value))
          return new Date(value);
        else
          return value === "" ? null : value;
      }
      return value;
    }
    function applyHeaderAndDynamicTypingAndTransformation() {
      if (!_results || !_results.data || !_config.header && !_config.dynamicTyping && !_config.transform)
        return _results;
      function processRow(rowSource, i) {
        var row = _config.header ? {} : [];
        var j;
        for (j = 0; j < rowSource.length; j++) {
          var field = j;
          var value = rowSource[j];
          if (_config.header)
            field = j >= _fields.length ? "__parsed_extra" : _fields[j];
          if (_config.transform)
            value = _config.transform(value, field);
          value = parseDynamic(field, value);
          if (field === "__parsed_extra") {
            row[field] = row[field] || [];
            row[field].push(value);
          } else
            row[field] = value;
        }
        if (_config.header) {
          if (j > _fields.length)
            addError("FieldMismatch", "TooManyFields", "Too many fields: expected " + _fields.length + " fields but parsed " + j, _rowCounter + i);
          else if (j < _fields.length)
            addError("FieldMismatch", "TooFewFields", "Too few fields: expected " + _fields.length + " fields but parsed " + j, _rowCounter + i);
        }
        return row;
      }
      var incrementBy = 1;
      if (!_results.data[0] || Array.isArray(_results.data[0])) {
        _results.data = _results.data.map(processRow);
        incrementBy = _results.data.length;
      } else
        _results.data = processRow(_results.data, 0);
      if (_config.header && _results.meta)
        _results.meta.fields = _fields;
      _rowCounter += incrementBy;
      return _results;
    }
    function guessDelimiter(input, newline, skipEmptyLines, comments, delimitersToGuess) {
      var bestDelim, bestDelta, fieldCountPrevRow;
      delimitersToGuess = delimitersToGuess || [",", "	", "|", ";", Papa.RECORD_SEP, Papa.UNIT_SEP];
      for (var i = 0; i < delimitersToGuess.length; i++) {
        var delim = delimitersToGuess[i];
        var delta = 0, avgFieldCount = 0, emptyLinesCount = 0;
        fieldCountPrevRow = void 0;
        var preview = new Parser({
          comments,
          delimiter: delim,
          newline,
          preview: 10
        }).parse(input);
        for (var j = 0; j < preview.data.length; j++) {
          if (skipEmptyLines && testEmptyLine(preview.data[j])) {
            emptyLinesCount++;
            continue;
          }
          var fieldCount = preview.data[j].length;
          avgFieldCount += fieldCount;
          if (typeof fieldCountPrevRow === "undefined") {
            fieldCountPrevRow = 0;
            continue;
          } else if (fieldCount > 1) {
            delta += Math.abs(fieldCount - fieldCountPrevRow);
            fieldCountPrevRow = fieldCount;
          }
        }
        if (preview.data.length > 0)
          avgFieldCount /= preview.data.length - emptyLinesCount;
        if ((typeof bestDelta === "undefined" || delta > bestDelta) && avgFieldCount > 1.99) {
          bestDelta = delta;
          bestDelim = delim;
        }
      }
      _config.delimiter = bestDelim;
      return {
        successful: !!bestDelim,
        bestDelimiter: bestDelim
      };
    }
    function guessLineEndings(input, quoteChar) {
      input = input.substr(0, 1024 * 1024);
      var re = new RegExp(escapeRegExp(quoteChar) + "([^]*?)" + escapeRegExp(quoteChar), "gm");
      input = input.replace(re, "");
      var r = input.split("\r");
      var n = input.split("\n");
      var nAppearsFirst = n.length > 1 && n[0].length < r[0].length;
      if (r.length === 1 || nAppearsFirst)
        return "\n";
      var numWithN = 0;
      for (var i = 0; i < r.length; i++) {
        if (r[i][0] === "\n")
          numWithN++;
      }
      return numWithN >= r.length / 2 ? "\r\n" : "\r";
    }
    function addError(type, code, msg, row) {
      _results.errors.push({
        type,
        code,
        message: msg,
        row
      });
    }
  }
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function Parser(config) {
    config = config || {};
    var delim = config.delimiter;
    var newline = config.newline;
    var comments = config.comments;
    var step = config.step;
    var preview = config.preview;
    var fastMode = config.fastMode;
    var quoteChar;
    if (config.quoteChar === void 0) {
      quoteChar = '"';
    } else {
      quoteChar = config.quoteChar;
    }
    var escapeChar = quoteChar;
    if (config.escapeChar !== void 0) {
      escapeChar = config.escapeChar;
    }
    if (typeof delim !== "string" || Papa.BAD_DELIMITERS.indexOf(delim) > -1)
      delim = ",";
    if (comments === delim)
      throw new Error("Comment character same as delimiter");
    else if (comments === true)
      comments = "#";
    else if (typeof comments !== "string" || Papa.BAD_DELIMITERS.indexOf(comments) > -1)
      comments = false;
    if (newline !== "\n" && newline !== "\r" && newline !== "\r\n")
      newline = "\n";
    var cursor = 0;
    var aborted = false;
    this.parse = function(input, baseIndex, ignoreLastRow) {
      if (typeof input !== "string")
        throw new Error("Input must be a string");
      var inputLen = input.length, delimLen = delim.length, newlineLen = newline.length, commentsLen = comments.length;
      var stepIsFunction = isFunction2(step);
      cursor = 0;
      var data = [], errors = [], row = [], lastCursor = 0;
      if (!input)
        return returnable();
      if (fastMode || fastMode !== false && input.indexOf(quoteChar) === -1) {
        var rows = input.split(newline);
        for (var i = 0; i < rows.length; i++) {
          row = rows[i];
          cursor += row.length;
          if (i !== rows.length - 1)
            cursor += newline.length;
          else if (ignoreLastRow)
            return returnable();
          if (comments && row.substr(0, commentsLen) === comments)
            continue;
          if (stepIsFunction) {
            data = [];
            pushRow(row.split(delim));
            doStep();
            if (aborted)
              return returnable();
          } else
            pushRow(row.split(delim));
          if (preview && i >= preview) {
            data = data.slice(0, preview);
            return returnable(true);
          }
        }
        return returnable();
      }
      var nextDelim = input.indexOf(delim, cursor);
      var nextNewline = input.indexOf(newline, cursor);
      var quoteCharRegex = new RegExp(escapeRegExp(escapeChar) + escapeRegExp(quoteChar), "g");
      var quoteSearch;
      for (; ; ) {
        if (input[cursor] === quoteChar) {
          quoteSearch = cursor;
          cursor++;
          for (; ; ) {
            quoteSearch = input.indexOf(quoteChar, quoteSearch + 1);
            if (quoteSearch === -1) {
              if (!ignoreLastRow) {
                errors.push({
                  type: "Quotes",
                  code: "MissingQuotes",
                  message: "Quoted field unterminated",
                  row: data.length,
                  index: cursor
                });
              }
              return finish();
            }
            if (quoteSearch === inputLen - 1) {
              var value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
              return finish(value);
            }
            if (quoteChar === escapeChar && input[quoteSearch + 1] === escapeChar) {
              quoteSearch++;
              continue;
            }
            if (quoteChar !== escapeChar && quoteSearch !== 0 && input[quoteSearch - 1] === escapeChar) {
              continue;
            }
            var checkUpTo = nextNewline === -1 ? nextDelim : Math.min(nextDelim, nextNewline);
            var spacesBetweenQuoteAndDelimiter = extraSpaces(checkUpTo);
            if (input[quoteSearch + 1 + spacesBetweenQuoteAndDelimiter] === delim) {
              row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
              cursor = quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen;
              nextDelim = input.indexOf(delim, cursor);
              nextNewline = input.indexOf(newline, cursor);
              if (stepIsFunction) {
                doStep();
                if (aborted)
                  return returnable();
              }
              if (preview && data.length >= preview)
                return returnable(true);
              break;
            }
            var spacesBetweenQuoteAndNewLine = extraSpaces(nextNewline);
            if (input.substr(quoteSearch + 1 + spacesBetweenQuoteAndNewLine, newlineLen) === newline) {
              row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
              saveRow(quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen);
              nextDelim = input.indexOf(delim, cursor);
              if (stepIsFunction) {
                doStep();
                if (aborted)
                  return returnable();
              }
              if (preview && data.length >= preview)
                return returnable(true);
              break;
            }
            errors.push({
              type: "Quotes",
              code: "InvalidQuotes",
              message: "Trailing quote on quoted field is malformed",
              row: data.length,
              index: cursor
            });
            quoteSearch++;
            continue;
          }
          if (stepIsFunction) {
            doStep();
            if (aborted)
              return returnable();
          }
          if (preview && data.length >= preview)
            return returnable(true);
          continue;
        }
        if (comments && row.length === 0 && input.substr(cursor, commentsLen) === comments) {
          if (nextNewline === -1)
            return returnable();
          cursor = nextNewline + newlineLen;
          nextNewline = input.indexOf(newline, cursor);
          nextDelim = input.indexOf(delim, cursor);
          continue;
        }
        if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1)) {
          row.push(input.substring(cursor, nextDelim));
          cursor = nextDelim + delimLen;
          nextDelim = input.indexOf(delim, cursor);
          continue;
        }
        if (nextNewline !== -1) {
          row.push(input.substring(cursor, nextNewline));
          saveRow(nextNewline + newlineLen);
          if (stepIsFunction) {
            doStep();
            if (aborted)
              return returnable();
          }
          if (preview && data.length >= preview)
            return returnable(true);
          continue;
        }
        break;
      }
      return finish();
      function pushRow(row2) {
        data.push(row2);
        lastCursor = cursor;
      }
      function extraSpaces(index) {
        var spaceLength = 0;
        if (index !== -1) {
          var textBetweenClosingQuoteAndIndex = input.substring(quoteSearch + 1, index);
          if (textBetweenClosingQuoteAndIndex && textBetweenClosingQuoteAndIndex.trim() === "") {
            spaceLength = textBetweenClosingQuoteAndIndex.length;
          }
        }
        return spaceLength;
      }
      function finish(value2) {
        if (ignoreLastRow)
          return returnable();
        if (typeof value2 === "undefined")
          value2 = input.substr(cursor);
        row.push(value2);
        cursor = inputLen;
        pushRow(row);
        if (stepIsFunction)
          doStep();
        return returnable();
      }
      function saveRow(newCursor) {
        cursor = newCursor;
        pushRow(row);
        row = [];
        nextNewline = input.indexOf(newline, cursor);
      }
      function returnable(stopped, step2) {
        var isStep = step2 || false;
        return {
          data: isStep ? data[0] : data,
          errors,
          meta: {
            delimiter: delim,
            linebreak: newline,
            aborted,
            truncated: !!stopped,
            cursor: lastCursor + (baseIndex || 0)
          }
        };
      }
      function doStep() {
        step(returnable(void 0, true));
        data = [];
        errors = [];
      }
    };
    this.abort = function() {
      aborted = true;
    };
    this.getCharIndex = function() {
      return cursor;
    };
  }
  function copy(obj) {
    if (typeof obj !== "object" || obj === null)
      return obj;
    var cpy = Array.isArray(obj) ? [] : {};
    for (var key in obj)
      cpy[key] = copy(obj[key]);
    return cpy;
  }
  function isFunction2(func) {
    return typeof func === "function";
  }
  var BYTE_ORDER_MARK, Papa, papaparse_default;
  var init_papaparse = __esm({
    "../node_modules/.pnpm/@loaders.gl+csv@3.2.13/node_modules/@loaders.gl/csv/dist/esm/papaparse/papaparse.js"() {
      BYTE_ORDER_MARK = "\uFEFF";
      Papa = {
        parse: CsvToJson,
        unparse: JsonToCsv,
        RECORD_SEP: String.fromCharCode(30),
        UNIT_SEP: String.fromCharCode(31),
        BYTE_ORDER_MARK,
        BAD_DELIMITERS: ["\r", "\n", '"', BYTE_ORDER_MARK],
        WORKERS_SUPPORTED: false,
        NODE_STREAM_INPUT: 1,
        LocalChunkSize: 1024 * 1024 * 10,
        RemoteChunkSize: 1024 * 1024 * 5,
        DefaultDelimiter: ",",
        Parser,
        ParserHandle,
        ChunkStreamer,
        StringStreamer
      };
      papaparse_default = Papa;
      StringStreamer.prototype = Object.create(StringStreamer.prototype);
      StringStreamer.prototype.constructor = StringStreamer;
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+csv@3.2.13/node_modules/@loaders.gl/csv/dist/esm/papaparse/async-iterator-streamer.js
  function AsyncIteratorStreamer(config) {
    config = config || {};
    ChunkStreamer2.call(this, config);
    this.textDecoder = new TextDecoder(this._config.encoding);
    this.stream = async function(asyncIterator) {
      this._input = asyncIterator;
      try {
        for await (const chunk2 of asyncIterator) {
          this.parseChunk(this.getStringChunk(chunk2));
        }
        this._finished = true;
        this.parseChunk("");
      } catch (error) {
        this._sendError(error);
      }
    };
    this._nextChunk = function nextChunk() {
    };
    this.getStringChunk = function(chunk2) {
      return typeof chunk2 === "string" ? chunk2 : this.textDecoder.decode(chunk2, {
        stream: true
      });
    };
  }
  var ChunkStreamer2;
  var init_async_iterator_streamer = __esm({
    "../node_modules/.pnpm/@loaders.gl+csv@3.2.13/node_modules/@loaders.gl/csv/dist/esm/papaparse/async-iterator-streamer.js"() {
      init_papaparse();
      ({
        ChunkStreamer: ChunkStreamer2
      } = papaparse_default);
      AsyncIteratorStreamer.prototype = Object.create(ChunkStreamer2.prototype);
      AsyncIteratorStreamer.prototype.constructor = AsyncIteratorStreamer;
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+csv@3.2.13/node_modules/@loaders.gl/csv/dist/esm/csv-loader.js
  async function parseCSV(csvText, options) {
    const csvOptions = {
      ...DEFAULT_CSV_LOADER_OPTIONS.csv,
      ...options === null || options === void 0 ? void 0 : options.csv
    };
    const firstRow = readFirstRow(csvText);
    const header = csvOptions.header === "auto" ? isHeaderRow(firstRow) : Boolean(csvOptions.header);
    const parseWithHeader = header;
    const papaparseConfig = {
      ...csvOptions,
      header: parseWithHeader,
      download: false,
      transformHeader: parseWithHeader ? duplicateColumnTransformer() : void 0,
      error: (e) => {
        throw new Error(e);
      }
    };
    const result = papaparse_default.parse(csvText, papaparseConfig);
    let {
      data: rows
    } = result;
    const headerRow = result.meta.fields || generateHeader(csvOptions.columnPrefix, firstRow.length);
    switch (csvOptions.shape) {
      case "object-row-table":
        rows = rows.map((row) => Array.isArray(row) ? convertToObjectRow(row, headerRow) : row);
        break;
      case "array-row-table":
        rows = rows.map((row) => Array.isArray(row) ? row : convertToArrayRow(row, headerRow));
        break;
      default:
    }
    return rows;
  }
  function parseCSVInBatches(asyncIterator, options) {
    var _options;
    options = {
      ...options
    };
    if (options.batchSize === "auto") {
      options.batchSize = 4e3;
    }
    const csvOptions = {
      ...DEFAULT_CSV_LOADER_OPTIONS.csv,
      ...(_options = options) === null || _options === void 0 ? void 0 : _options.csv
    };
    const asyncQueue = new AsyncQueue();
    let isFirstRow = true;
    let headerRow = null;
    let tableBatchBuilder = null;
    let schema = null;
    const config = {
      ...csvOptions,
      header: false,
      download: false,
      chunkSize: 1024 * 1024 * 5,
      skipEmptyLines: false,
      step(results) {
        let row = results.data;
        if (csvOptions.skipEmptyLines) {
          const collapsedRow = row.flat().join("").trim();
          if (collapsedRow === "") {
            return;
          }
        }
        const bytesUsed = results.meta.cursor;
        if (isFirstRow && !headerRow) {
          const header = csvOptions.header === "auto" ? isHeaderRow(row) : Boolean(csvOptions.header);
          if (header) {
            headerRow = row.map(duplicateColumnTransformer());
            return;
          }
        }
        if (isFirstRow) {
          isFirstRow = false;
          if (!headerRow) {
            headerRow = generateHeader(csvOptions.columnPrefix, row.length);
          }
          schema = deduceSchema(row, headerRow);
        }
        if (csvOptions.optimizeMemoryUsage) {
          row = JSON.parse(JSON.stringify(row));
        }
        tableBatchBuilder = tableBatchBuilder || new TableBatchBuilder(schema, {
          shape: csvOptions.shape || "array-row-table",
          ...options
        });
        try {
          tableBatchBuilder.addRow(row);
          const batch = tableBatchBuilder && tableBatchBuilder.getFullBatch({
            bytesUsed
          });
          if (batch) {
            asyncQueue.enqueue(batch);
          }
        } catch (error) {
          asyncQueue.enqueue(error);
        }
      },
      complete(results) {
        try {
          const bytesUsed = results.meta.cursor;
          const batch = tableBatchBuilder && tableBatchBuilder.getFinalBatch({
            bytesUsed
          });
          if (batch) {
            asyncQueue.enqueue(batch);
          }
        } catch (error) {
          asyncQueue.enqueue(error);
        }
        asyncQueue.close();
      }
    };
    papaparse_default.parse(asyncIterator, config, AsyncIteratorStreamer);
    return asyncQueue;
  }
  function isHeaderRow(row) {
    return row && row.every((value) => typeof value === "string");
  }
  function readFirstRow(csvText) {
    const result = papaparse_default.parse(csvText, {
      download: false,
      dynamicTyping: true,
      preview: 1
    });
    return result.data[0];
  }
  function duplicateColumnTransformer() {
    const observedColumns = /* @__PURE__ */ new Set();
    return (col) => {
      let colName = col;
      let counter = 1;
      while (observedColumns.has(colName)) {
        colName = "".concat(col, ".").concat(counter);
        counter++;
      }
      observedColumns.add(colName);
      return colName;
    };
  }
  function generateHeader(columnPrefix, count = 0) {
    const headers = [];
    for (let i = 0; i < count; i++) {
      headers.push("".concat(columnPrefix).concat(i + 1));
    }
    return headers;
  }
  function deduceSchema(row, headerRow) {
    const schema = headerRow ? {} : [];
    for (let i = 0; i < row.length; i++) {
      const columnName = headerRow && headerRow[i] || i;
      const value = row[i];
      switch (typeof value) {
        case "number":
        case "boolean":
          schema[columnName] = {
            name: String(columnName),
            index: i,
            type: Float32Array
          };
          break;
        case "string":
        default:
          schema[columnName] = {
            name: String(columnName),
            index: i,
            type: Array
          };
      }
    }
    return schema;
  }
  var VERSION3, DEFAULT_CSV_LOADER_OPTIONS, CSVLoader;
  var init_csv_loader = __esm({
    "../node_modules/.pnpm/@loaders.gl+csv@3.2.13/node_modules/@loaders.gl/csv/dist/esm/csv-loader.js"() {
      init_esm();
      init_papaparse();
      init_async_iterator_streamer();
      VERSION3 = true ? "3.2.13" : "latest";
      DEFAULT_CSV_LOADER_OPTIONS = {
        csv: {
          shape: "object-row-table",
          optimizeMemoryUsage: false,
          header: "auto",
          columnPrefix: "column",
          quoteChar: '"',
          escapeChar: '"',
          dynamicTyping: true,
          comments: false,
          skipEmptyLines: true,
          delimitersToGuess: [",", "	", "|", ";"]
        }
      };
      CSVLoader = {
        id: "csv",
        module: "csv",
        name: "CSV",
        version: VERSION3,
        extensions: ["csv", "tsv", "dsv"],
        mimeTypes: ["text/csv", "text/tab-separated-values", "text/dsv"],
        category: "table",
        parse: async (arrayBuffer, options) => parseCSV(new TextDecoder().decode(arrayBuffer), options),
        parseText: (text, options) => parseCSV(text, options),
        parseInBatches: parseCSVInBatches,
        options: DEFAULT_CSV_LOADER_OPTIONS
      };
    }
  });

  // ../node_modules/.pnpm/@loaders.gl+csv@3.2.13/node_modules/@loaders.gl/csv/dist/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    CSVLoader: () => CSVLoader
  });
  var init_esm2 = __esm({
    "../node_modules/.pnpm/@loaders.gl+csv@3.2.13/node_modules/@loaders.gl/csv/dist/esm/index.js"() {
      init_csv_loader();
    }
  });

  // ../node_modules/.pnpm/simple-statistics@7.8.2/node_modules/simple-statistics/dist/simple-statistics.mjs
  var simple_statistics_exports = {};
  __export(simple_statistics_exports, {
    BayesianClassifier: () => BayesianClassifier,
    PerceptronModel: () => PerceptronModel,
    addToMean: () => addToMean,
    approxEqual: () => approxEqual,
    average: () => mean,
    averageSimple: () => meanSimple,
    bayesian: () => BayesianClassifier,
    bernoulliDistribution: () => bernoulliDistribution,
    binomialDistribution: () => binomialDistribution,
    bisect: () => bisect,
    chiSquaredDistributionTable: () => chiSquaredDistributionTable,
    chiSquaredGoodnessOfFit: () => chiSquaredGoodnessOfFit,
    chunk: () => chunk,
    ckmeans: () => ckmeans,
    coefficientOfVariation: () => coefficientOfVariation,
    combinations: () => combinations,
    combinationsReplacement: () => combinationsReplacement,
    combineMeans: () => combineMeans,
    combineVariances: () => combineVariances,
    cumulativeStdLogisticProbability: () => cumulativeStdLogisticProbability,
    cumulativeStdNormalProbability: () => cumulativeStdNormalProbability,
    epsilon: () => epsilon,
    equalIntervalBreaks: () => equalIntervalBreaks,
    erf: () => errorFunction,
    errorFunction: () => errorFunction,
    extent: () => extent,
    extentSorted: () => extentSorted,
    factorial: () => factorial,
    gamma: () => gamma,
    gammaln: () => gammaln,
    geometricMean: () => geometricMean,
    harmonicMean: () => harmonicMean,
    interquartileRange: () => interquartileRange,
    inverseErrorFunction: () => inverseErrorFunction,
    iqr: () => interquartileRange,
    jenks: () => jenks,
    kMeansCluster: () => kMeansCluster,
    kde: () => kernelDensityEstimation,
    kernelDensityEstimation: () => kernelDensityEstimation,
    linearRegression: () => linearRegression,
    linearRegressionLine: () => linearRegressionLine,
    logAverage: () => logAverage,
    logit: () => logit,
    mad: () => medianAbsoluteDeviation,
    max: () => max,
    maxSorted: () => maxSorted,
    mean: () => mean,
    meanSimple: () => meanSimple,
    median: () => median,
    medianAbsoluteDeviation: () => medianAbsoluteDeviation,
    medianSorted: () => medianSorted,
    min: () => min,
    minSorted: () => minSorted,
    mode: () => mode,
    modeFast: () => modeFast,
    modeSorted: () => modeSorted,
    numericSort: () => numericSort,
    perceptron: () => PerceptronModel,
    permutationTest: () => permutationTest,
    permutationsHeap: () => permutationsHeap,
    poissonDistribution: () => poissonDistribution,
    probit: () => probit,
    product: () => product,
    quantile: () => quantile,
    quantileRank: () => quantileRank,
    quantileRankSorted: () => quantileRankSorted,
    quantileSorted: () => quantileSorted,
    quickselect: () => quickselect,
    rSquared: () => rSquared,
    relativeError: () => relativeError,
    rms: () => rootMeanSquare,
    rootMeanSquare: () => rootMeanSquare,
    sample: () => sample,
    sampleCorrelation: () => sampleCorrelation,
    sampleCovariance: () => sampleCovariance,
    sampleKurtosis: () => sampleKurtosis,
    sampleRankCorrelation: () => sampleRankCorrelation,
    sampleSkewness: () => sampleSkewness,
    sampleStandardDeviation: () => sampleStandardDeviation,
    sampleVariance: () => sampleVariance,
    sampleWithReplacement: () => sampleWithReplacement,
    shuffle: () => shuffle,
    shuffleInPlace: () => shuffleInPlace,
    sign: () => sign,
    silhouette: () => silhouette,
    silhouetteMetric: () => silhouetteMetric,
    standardDeviation: () => standardDeviation,
    standardNormalTable: () => standardNormalTable,
    subtractFromMean: () => subtractFromMean,
    sum: () => sum,
    sumNthPowerDeviations: () => sumNthPowerDeviations,
    sumSimple: () => sumSimple,
    tTest: () => tTest,
    tTestTwoSample: () => tTestTwoSample,
    uniqueCountSorted: () => uniqueCountSorted,
    variance: () => variance,
    wilcoxonRankSum: () => wilcoxonRankSum,
    zScore: () => zScore
  });
  function linearRegression(data) {
    var m, b;
    var dataLength = data.length;
    if (dataLength === 1) {
      m = 0;
      b = data[0][1];
    } else {
      var sumX = 0, sumY = 0, sumXX = 0, sumXY = 0;
      var point, x, y;
      for (var i = 0; i < dataLength; i++) {
        point = data[i];
        x = point[0];
        y = point[1];
        sumX += x;
        sumY += y;
        sumXX += x * x;
        sumXY += x * y;
      }
      m = (dataLength * sumXY - sumX * sumY) / (dataLength * sumXX - sumX * sumX);
      b = sumY / dataLength - m * sumX / dataLength;
    }
    return {
      m,
      b
    };
  }
  function linearRegressionLine(mb) {
    return function(x) {
      return mb.b + mb.m * x;
    };
  }
  function sum(x) {
    if (x.length === 0) {
      return 0;
    }
    var sum2 = x[0];
    var correction = 0;
    var transition;
    if (typeof sum2 !== "number") {
      return NaN;
    }
    for (var i = 1; i < x.length; i++) {
      if (typeof x[i] !== "number") {
        return NaN;
      }
      transition = sum2 + x[i];
      if (Math.abs(sum2) >= Math.abs(x[i])) {
        correction += sum2 - transition + x[i];
      } else {
        correction += x[i] - transition + sum2;
      }
      sum2 = transition;
    }
    return sum2 + correction;
  }
  function mean(x) {
    if (x.length === 0) {
      throw new Error("mean requires at least one data point");
    }
    return sum(x) / x.length;
  }
  function sumNthPowerDeviations(x, n) {
    var meanValue = mean(x);
    var sum2 = 0;
    var tempValue;
    var i;
    if (n === 2) {
      for (i = 0; i < x.length; i++) {
        tempValue = x[i] - meanValue;
        sum2 += tempValue * tempValue;
      }
    } else {
      for (i = 0; i < x.length; i++) {
        sum2 += Math.pow(x[i] - meanValue, n);
      }
    }
    return sum2;
  }
  function variance(x) {
    if (x.length === 0) {
      throw new Error("variance requires at least one data point");
    }
    return sumNthPowerDeviations(x, 2) / x.length;
  }
  function standardDeviation(x) {
    if (x.length === 1) {
      return 0;
    }
    var v = variance(x);
    return Math.sqrt(v);
  }
  function rSquared(x, func) {
    if (x.length < 2) {
      return 1;
    }
    var sum2 = 0;
    for (var i = 0; i < x.length; i++) {
      sum2 += x[i][1];
    }
    var average = sum2 / x.length;
    var sumOfSquares = 0;
    for (var j = 0; j < x.length; j++) {
      sumOfSquares += Math.pow(average - x[j][1], 2);
    }
    var err = 0;
    for (var k = 0; k < x.length; k++) {
      err += Math.pow(x[k][1] - func(x[k][0]), 2);
    }
    return 1 - err / sumOfSquares;
  }
  function modeSorted(sorted) {
    if (sorted.length === 0) {
      throw new Error("mode requires at least one data point");
    } else if (sorted.length === 1) {
      return sorted[0];
    }
    var last = sorted[0], value = NaN, maxSeen = 0, seenThis = 1;
    for (var i = 1; i < sorted.length + 1; i++) {
      if (sorted[i] !== last) {
        if (seenThis > maxSeen) {
          maxSeen = seenThis;
          value = last;
        }
        seenThis = 1;
        last = sorted[i];
      } else {
        seenThis++;
      }
    }
    return value;
  }
  function numericSort(x) {
    return x.slice().sort(function(a, b) {
      return a - b;
    });
  }
  function mode(x) {
    return modeSorted(numericSort(x));
  }
  function modeFast(x) {
    var index = /* @__PURE__ */ new Map();
    var mode2;
    var modeCount = 0;
    for (var i = 0; i < x.length; i++) {
      var newCount = index.get(x[i]);
      if (newCount === void 0) {
        newCount = 1;
      } else {
        newCount++;
      }
      if (newCount > modeCount) {
        mode2 = x[i];
        modeCount = newCount;
      }
      index.set(x[i], newCount);
    }
    if (modeCount === 0) {
      throw new Error("mode requires at last one data point");
    }
    return mode2;
  }
  function min(x) {
    if (x.length === 0) {
      throw new Error("min requires at least one data point");
    }
    var value = x[0];
    for (var i = 1; i < x.length; i++) {
      if (x[i] < value) {
        value = x[i];
      }
    }
    return value;
  }
  function max(x) {
    if (x.length === 0) {
      throw new Error("max requires at least one data point");
    }
    var value = x[0];
    for (var i = 1; i < x.length; i++) {
      if (x[i] > value) {
        value = x[i];
      }
    }
    return value;
  }
  function extent(x) {
    if (x.length === 0) {
      throw new Error("extent requires at least one data point");
    }
    var min2 = x[0];
    var max2 = x[0];
    for (var i = 1; i < x.length; i++) {
      if (x[i] > max2) {
        max2 = x[i];
      }
      if (x[i] < min2) {
        min2 = x[i];
      }
    }
    return [min2, max2];
  }
  function minSorted(x) {
    return x[0];
  }
  function maxSorted(x) {
    return x[x.length - 1];
  }
  function extentSorted(x) {
    return [x[0], x[x.length - 1]];
  }
  function sumSimple(x) {
    var value = 0;
    for (var i = 0; i < x.length; i++) {
      if (typeof x[i] !== "number") {
        return NaN;
      }
      value += x[i];
    }
    return value;
  }
  function product(x) {
    var value = 1;
    for (var i = 0; i < x.length; i++) {
      value *= x[i];
    }
    return value;
  }
  function quantileSorted(x, p) {
    var idx = x.length * p;
    if (x.length === 0) {
      throw new Error("quantile requires at least one data point.");
    } else if (p < 0 || p > 1) {
      throw new Error("quantiles must be between 0 and 1");
    } else if (p === 1) {
      return x[x.length - 1];
    } else if (p === 0) {
      return x[0];
    } else if (idx % 1 !== 0) {
      return x[Math.ceil(idx) - 1];
    } else if (x.length % 2 === 0) {
      return (x[idx - 1] + x[idx]) / 2;
    } else {
      return x[idx];
    }
  }
  function quickselect(arr, k, left, right) {
    left = left || 0;
    right = right || arr.length - 1;
    while (right > left) {
      if (right - left > 600) {
        var n = right - left + 1;
        var m = k - left + 1;
        var z = Math.log(n);
        var s = 0.5 * Math.exp(2 * z / 3);
        var sd = 0.5 * Math.sqrt(z * s * (n - s) / n);
        if (m - n / 2 < 0) {
          sd *= -1;
        }
        var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
        var newRight = Math.min(
          right,
          Math.floor(k + (n - m) * s / n + sd)
        );
        quickselect(arr, k, newLeft, newRight);
      }
      var t = arr[k];
      var i = left;
      var j = right;
      swap(arr, left, k);
      if (arr[right] > t) {
        swap(arr, left, right);
      }
      while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
        while (arr[i] < t) {
          i++;
        }
        while (arr[j] > t) {
          j--;
        }
      }
      if (arr[left] === t) {
        swap(arr, left, j);
      } else {
        j++;
        swap(arr, j, right);
      }
      if (j <= k) {
        left = j + 1;
      }
      if (k <= j) {
        right = j - 1;
      }
    }
  }
  function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  function quantile(x, p) {
    var copy2 = x.slice();
    if (Array.isArray(p)) {
      multiQuantileSelect(copy2, p);
      var results = [];
      for (var i = 0; i < p.length; i++) {
        results[i] = quantileSorted(copy2, p[i]);
      }
      return results;
    } else {
      var idx = quantileIndex(copy2.length, p);
      quantileSelect(copy2, idx, 0, copy2.length - 1);
      return quantileSorted(copy2, p);
    }
  }
  function quantileSelect(arr, k, left, right) {
    if (k % 1 === 0) {
      quickselect(arr, k, left, right);
    } else {
      k = Math.floor(k);
      quickselect(arr, k, left, right);
      quickselect(arr, k + 1, k + 1, right);
    }
  }
  function multiQuantileSelect(arr, p) {
    var indices = [0];
    for (var i = 0; i < p.length; i++) {
      indices.push(quantileIndex(arr.length, p[i]));
    }
    indices.push(arr.length - 1);
    indices.sort(compare);
    var stack = [0, indices.length - 1];
    while (stack.length) {
      var r = Math.ceil(stack.pop());
      var l = Math.floor(stack.pop());
      if (r - l <= 1) {
        continue;
      }
      var m = Math.floor((l + r) / 2);
      quantileSelect(
        arr,
        indices[m],
        Math.floor(indices[l]),
        Math.ceil(indices[r])
      );
      stack.push(l, m, m, r);
    }
  }
  function compare(a, b) {
    return a - b;
  }
  function quantileIndex(len, p) {
    var idx = len * p;
    if (p === 1) {
      return len - 1;
    } else if (p === 0) {
      return 0;
    } else if (idx % 1 !== 0) {
      return Math.ceil(idx) - 1;
    } else if (len % 2 === 0) {
      return idx - 0.5;
    } else {
      return idx;
    }
  }
  function quantileRankSorted(x, value) {
    if (value < x[0]) {
      return 0;
    }
    if (value > x[x.length - 1]) {
      return 1;
    }
    var l = lowerBound(x, value);
    if (x[l] !== value) {
      return l / x.length;
    }
    l++;
    var u = upperBound(x, value);
    if (u === l) {
      return l / x.length;
    }
    var r = u - l + 1;
    var sum2 = r * (u + l) / 2;
    var mean2 = sum2 / r;
    return mean2 / x.length;
  }
  function lowerBound(x, value) {
    var mid = 0;
    var lo = 0;
    var hi = x.length;
    while (lo < hi) {
      mid = lo + hi >>> 1;
      if (value <= x[mid]) {
        hi = mid;
      } else {
        lo = -~mid;
      }
    }
    return lo;
  }
  function upperBound(x, value) {
    var mid = 0;
    var lo = 0;
    var hi = x.length;
    while (lo < hi) {
      mid = lo + hi >>> 1;
      if (value >= x[mid]) {
        lo = -~mid;
      } else {
        hi = mid;
      }
    }
    return lo;
  }
  function quantileRank(x, value) {
    var sortedCopy = numericSort(x);
    return quantileRankSorted(sortedCopy, value);
  }
  function interquartileRange(x) {
    var q1 = quantile(x, 0.75);
    var q2 = quantile(x, 0.25);
    if (typeof q1 === "number" && typeof q2 === "number") {
      return q1 - q2;
    }
  }
  function median(x) {
    return +quantile(x, 0.5);
  }
  function medianAbsoluteDeviation(x) {
    var medianValue = median(x);
    var medianAbsoluteDeviations = [];
    for (var i = 0; i < x.length; i++) {
      medianAbsoluteDeviations.push(Math.abs(x[i] - medianValue));
    }
    return median(medianAbsoluteDeviations);
  }
  function chunk(x, chunkSize) {
    var output = [];
    if (chunkSize < 1) {
      throw new Error("chunk size must be a positive number");
    }
    if (Math.floor(chunkSize) !== chunkSize) {
      throw new Error("chunk size must be an integer");
    }
    for (var start = 0; start < x.length; start += chunkSize) {
      output.push(x.slice(start, start + chunkSize));
    }
    return output;
  }
  function sampleWithReplacement(x, n, randomSource) {
    if (x.length === 0) {
      return [];
    }
    randomSource = randomSource || Math.random;
    var length = x.length;
    var sample2 = [];
    for (var i = 0; i < n; i++) {
      var index = Math.floor(randomSource() * length);
      sample2.push(x[index]);
    }
    return sample2;
  }
  function shuffleInPlace(x, randomSource) {
    randomSource = randomSource || Math.random;
    var length = x.length;
    var temporary;
    var index;
    while (length > 0) {
      index = Math.floor(randomSource() * length--);
      temporary = x[length];
      x[length] = x[index];
      x[index] = temporary;
    }
    return x;
  }
  function shuffle(x, randomSource) {
    var sample2 = x.slice();
    return shuffleInPlace(sample2, randomSource);
  }
  function sample(x, n, randomSource) {
    var shuffled = shuffle(x, randomSource);
    return shuffled.slice(0, n);
  }
  function makeMatrix(columns, rows) {
    var matrix = [];
    for (var i = 0; i < columns; i++) {
      var column = [];
      for (var j = 0; j < rows; j++) {
        column.push(0);
      }
      matrix.push(column);
    }
    return matrix;
  }
  function uniqueCountSorted(x) {
    var uniqueValueCount = 0, lastSeenValue;
    for (var i = 0; i < x.length; i++) {
      if (i === 0 || x[i] !== lastSeenValue) {
        lastSeenValue = x[i];
        uniqueValueCount++;
      }
    }
    return uniqueValueCount;
  }
  function ssq(j, i, sums, sumsOfSquares) {
    var sji;
    if (j > 0) {
      var muji = (sums[i] - sums[j - 1]) / (i - j + 1);
      sji = sumsOfSquares[i] - sumsOfSquares[j - 1] - (i - j + 1) * muji * muji;
    } else {
      sji = sumsOfSquares[i] - sums[i] * sums[i] / (i + 1);
    }
    if (sji < 0) {
      return 0;
    }
    return sji;
  }
  function fillMatrixColumn(iMin, iMax, cluster, matrix, backtrackMatrix, sums, sumsOfSquares) {
    if (iMin > iMax) {
      return;
    }
    var i = Math.floor((iMin + iMax) / 2);
    matrix[cluster][i] = matrix[cluster - 1][i - 1];
    backtrackMatrix[cluster][i] = i;
    var jlow = cluster;
    if (iMin > cluster) {
      jlow = Math.max(jlow, backtrackMatrix[cluster][iMin - 1] || 0);
    }
    jlow = Math.max(jlow, backtrackMatrix[cluster - 1][i] || 0);
    var jhigh = i - 1;
    if (iMax < matrix[0].length - 1) {
      jhigh = Math.min(jhigh, backtrackMatrix[cluster][iMax + 1] || 0);
    }
    var sji;
    var sjlowi;
    var ssqjlow;
    var ssqj;
    for (var j = jhigh; j >= jlow; --j) {
      sji = ssq(j, i, sums, sumsOfSquares);
      if (sji + matrix[cluster - 1][jlow - 1] >= matrix[cluster][i]) {
        break;
      }
      sjlowi = ssq(jlow, i, sums, sumsOfSquares);
      ssqjlow = sjlowi + matrix[cluster - 1][jlow - 1];
      if (ssqjlow < matrix[cluster][i]) {
        matrix[cluster][i] = ssqjlow;
        backtrackMatrix[cluster][i] = jlow;
      }
      jlow++;
      ssqj = sji + matrix[cluster - 1][j - 1];
      if (ssqj < matrix[cluster][i]) {
        matrix[cluster][i] = ssqj;
        backtrackMatrix[cluster][i] = j;
      }
    }
    fillMatrixColumn(
      iMin,
      i - 1,
      cluster,
      matrix,
      backtrackMatrix,
      sums,
      sumsOfSquares
    );
    fillMatrixColumn(
      i + 1,
      iMax,
      cluster,
      matrix,
      backtrackMatrix,
      sums,
      sumsOfSquares
    );
  }
  function fillMatrices(data, matrix, backtrackMatrix) {
    var nValues = matrix[0].length;
    var shift = data[Math.floor(nValues / 2)];
    var sums = [];
    var sumsOfSquares = [];
    for (var i = 0, shiftedValue = void 0; i < nValues; ++i) {
      shiftedValue = data[i] - shift;
      if (i === 0) {
        sums.push(shiftedValue);
        sumsOfSquares.push(shiftedValue * shiftedValue);
      } else {
        sums.push(sums[i - 1] + shiftedValue);
        sumsOfSquares.push(
          sumsOfSquares[i - 1] + shiftedValue * shiftedValue
        );
      }
      matrix[0][i] = ssq(0, i, sums, sumsOfSquares);
      backtrackMatrix[0][i] = 0;
    }
    var iMin;
    for (var cluster = 1; cluster < matrix.length; ++cluster) {
      if (cluster < matrix.length - 1) {
        iMin = cluster;
      } else {
        iMin = nValues - 1;
      }
      fillMatrixColumn(
        iMin,
        nValues - 1,
        cluster,
        matrix,
        backtrackMatrix,
        sums,
        sumsOfSquares
      );
    }
  }
  function ckmeans(x, nClusters) {
    if (nClusters > x.length) {
      throw new Error(
        "cannot generate more classes than there are data values"
      );
    }
    var sorted = numericSort(x);
    var uniqueCount = uniqueCountSorted(sorted);
    if (uniqueCount === 1) {
      return [sorted];
    }
    var matrix = makeMatrix(nClusters, sorted.length);
    var backtrackMatrix = makeMatrix(nClusters, sorted.length);
    fillMatrices(sorted, matrix, backtrackMatrix);
    var clusters = [];
    var clusterRight = backtrackMatrix[0].length - 1;
    for (var cluster = backtrackMatrix.length - 1; cluster >= 0; cluster--) {
      var clusterLeft = backtrackMatrix[cluster][clusterRight];
      clusters[cluster] = sorted.slice(clusterLeft, clusterRight + 1);
      if (cluster > 0) {
        clusterRight = clusterLeft - 1;
      }
    }
    return clusters;
  }
  function jenksBreaks(data, lowerClassLimits, nClasses) {
    var k = data.length;
    var kclass = [];
    var countNum = nClasses;
    kclass[nClasses] = data[data.length - 1];
    while (countNum > 0) {
      kclass[countNum - 1] = data[lowerClassLimits[k][countNum] - 1];
      k = lowerClassLimits[k][countNum] - 1;
      countNum--;
    }
    return kclass;
  }
  function jenksMatrices(data, nClasses) {
    var lowerClassLimits = [];
    var varianceCombinations = [];
    var i, j;
    var variance2 = 0;
    for (i = 0; i < data.length + 1; i++) {
      var tmp1 = [];
      var tmp2 = [];
      for (j = 0; j < nClasses + 1; j++) {
        tmp1.push(0);
        tmp2.push(0);
      }
      lowerClassLimits.push(tmp1);
      varianceCombinations.push(tmp2);
    }
    for (i = 1; i < nClasses + 1; i++) {
      lowerClassLimits[1][i] = 1;
      varianceCombinations[1][i] = 0;
      for (j = 2; j < data.length + 1; j++) {
        varianceCombinations[j][i] = Infinity;
      }
    }
    for (var l = 2; l < data.length + 1; l++) {
      var sum2 = 0;
      var sumSquares = 0;
      var w = 0;
      var i4 = 0;
      for (var m = 1; m < l + 1; m++) {
        var lowerClassLimit = l - m + 1;
        var val = data[lowerClassLimit - 1];
        w++;
        sum2 += val;
        sumSquares += val * val;
        variance2 = sumSquares - sum2 * sum2 / w;
        i4 = lowerClassLimit - 1;
        if (i4 !== 0) {
          for (j = 2; j < nClasses + 1; j++) {
            if (varianceCombinations[l][j] >= variance2 + varianceCombinations[i4][j - 1]) {
              lowerClassLimits[l][j] = lowerClassLimit;
              varianceCombinations[l][j] = variance2 + varianceCombinations[i4][j - 1];
            }
          }
        }
      }
      lowerClassLimits[l][1] = 1;
      varianceCombinations[l][1] = variance2;
    }
    return {
      lowerClassLimits,
      varianceCombinations
    };
  }
  function jenks(data, nClasses) {
    if (nClasses > data.length) {
      return null;
    }
    data = data.slice().sort(function(a, b) {
      return a - b;
    });
    var matrices = jenksMatrices(data, nClasses);
    var lowerClassLimits = matrices.lowerClassLimits;
    return jenksBreaks(data, lowerClassLimits, nClasses);
  }
  function equalIntervalBreaks(x, nClasses) {
    if (x.length < 2) {
      return x;
    }
    var theMin = min(x);
    var theMax = max(x);
    var breaks = [theMin];
    var breakSize = (theMax - theMin) / nClasses;
    for (var i = 1; i < nClasses; i++) {
      breaks.push(breaks[0] + breakSize * i);
    }
    breaks.push(theMax);
    return breaks;
  }
  function sampleCovariance(x, y) {
    if (x.length !== y.length) {
      throw new Error("sampleCovariance requires samples with equal lengths");
    }
    if (x.length < 2) {
      throw new Error(
        "sampleCovariance requires at least two data points in each sample"
      );
    }
    var xmean = mean(x);
    var ymean = mean(y);
    var sum2 = 0;
    for (var i = 0; i < x.length; i++) {
      sum2 += (x[i] - xmean) * (y[i] - ymean);
    }
    var besselsCorrection = x.length - 1;
    return sum2 / besselsCorrection;
  }
  function sampleVariance(x) {
    if (x.length < 2) {
      throw new Error("sampleVariance requires at least two data points");
    }
    var sumSquaredDeviationsValue = sumNthPowerDeviations(x, 2);
    var besselsCorrection = x.length - 1;
    return sumSquaredDeviationsValue / besselsCorrection;
  }
  function sampleStandardDeviation(x) {
    var sampleVarianceX = sampleVariance(x);
    return Math.sqrt(sampleVarianceX);
  }
  function sampleCorrelation(x, y) {
    var cov = sampleCovariance(x, y);
    var xstd = sampleStandardDeviation(x);
    var ystd = sampleStandardDeviation(y);
    return cov / xstd / ystd;
  }
  function sampleRankCorrelation(x, y) {
    var xIndexes = x.map(function(value, index) {
      return [value, index];
    }).sort(function(a, b) {
      return a[0] - b[0];
    }).map(function(pair) {
      return pair[1];
    });
    var yIndexes = y.map(function(value, index) {
      return [value, index];
    }).sort(function(a, b) {
      return a[0] - b[0];
    }).map(function(pair) {
      return pair[1];
    });
    var xRanks = Array(xIndexes.length);
    var yRanks = Array(xIndexes.length);
    for (var i = 0; i < xIndexes.length; i++) {
      xRanks[xIndexes[i]] = i;
      yRanks[yIndexes[i]] = i;
    }
    return sampleCorrelation(xRanks, yRanks);
  }
  function sampleSkewness(x) {
    if (x.length < 3) {
      throw new Error("sampleSkewness requires at least three data points");
    }
    var meanValue = mean(x);
    var tempValue;
    var sumSquaredDeviations = 0;
    var sumCubedDeviations = 0;
    for (var i = 0; i < x.length; i++) {
      tempValue = x[i] - meanValue;
      sumSquaredDeviations += tempValue * tempValue;
      sumCubedDeviations += tempValue * tempValue * tempValue;
    }
    var besselsCorrection = x.length - 1;
    var theSampleStandardDeviation = Math.sqrt(
      sumSquaredDeviations / besselsCorrection
    );
    var n = x.length;
    var cubedS = Math.pow(theSampleStandardDeviation, 3);
    return n * sumCubedDeviations / ((n - 1) * (n - 2) * cubedS);
  }
  function sampleKurtosis(x) {
    var n = x.length;
    if (n < 4) {
      throw new Error("sampleKurtosis requires at least four data points");
    }
    var meanValue = mean(x);
    var tempValue;
    var secondCentralMoment = 0;
    var fourthCentralMoment = 0;
    for (var i = 0; i < n; i++) {
      tempValue = x[i] - meanValue;
      secondCentralMoment += tempValue * tempValue;
      fourthCentralMoment += tempValue * tempValue * tempValue * tempValue;
    }
    return (n - 1) / ((n - 2) * (n - 3)) * (n * (n + 1) * fourthCentralMoment / (secondCentralMoment * secondCentralMoment) - 3 * (n - 1));
  }
  function permutationsHeap(elements) {
    var indexes = new Array(elements.length);
    var permutations = [elements.slice()];
    for (var i = 0; i < elements.length; i++) {
      indexes[i] = 0;
    }
    for (var i$1 = 0; i$1 < elements.length; ) {
      if (indexes[i$1] < i$1) {
        var swapFrom = 0;
        if (i$1 % 2 !== 0) {
          swapFrom = indexes[i$1];
        }
        var temp = elements[swapFrom];
        elements[swapFrom] = elements[i$1];
        elements[i$1] = temp;
        permutations.push(elements.slice());
        indexes[i$1]++;
        i$1 = 0;
      } else {
        indexes[i$1] = 0;
        i$1++;
      }
    }
    return permutations;
  }
  function combinations(x, k) {
    var i;
    var subI;
    var combinationList = [];
    var subsetCombinations;
    var next;
    for (i = 0; i < x.length; i++) {
      if (k === 1) {
        combinationList.push([x[i]]);
      } else {
        subsetCombinations = combinations(x.slice(i + 1, x.length), k - 1);
        for (subI = 0; subI < subsetCombinations.length; subI++) {
          next = subsetCombinations[subI];
          next.unshift(x[i]);
          combinationList.push(next);
        }
      }
    }
    return combinationList;
  }
  function combinationsReplacement(x, k) {
    var combinationList = [];
    for (var i = 0; i < x.length; i++) {
      if (k === 1) {
        combinationList.push([x[i]]);
      } else {
        var subsetCombinations = combinationsReplacement(
          x.slice(i, x.length),
          k - 1
        );
        for (var j = 0; j < subsetCombinations.length; j++) {
          combinationList.push([x[i]].concat(subsetCombinations[j]));
        }
      }
    }
    return combinationList;
  }
  function addToMean(mean2, n, newValue) {
    return mean2 + (newValue - mean2) / (n + 1);
  }
  function combineMeans(mean1, n1, mean2, n2) {
    return (mean1 * n1 + mean2 * n2) / (n1 + n2);
  }
  function combineVariances(variance1, mean1, n1, variance2, mean2, n2) {
    var newMean = combineMeans(mean1, n1, mean2, n2);
    return (n1 * (variance1 + Math.pow(mean1 - newMean, 2)) + n2 * (variance2 + Math.pow(mean2 - newMean, 2))) / (n1 + n2);
  }
  function geometricMean(x) {
    if (x.length === 0) {
      throw new Error("geometricMean requires at least one data point");
    }
    var value = 1;
    for (var i = 0; i < x.length; i++) {
      if (x[i] < 0) {
        throw new Error(
          "geometricMean requires only non-negative numbers as input"
        );
      }
      value *= x[i];
    }
    return Math.pow(value, 1 / x.length);
  }
  function logAverage(x) {
    if (x.length === 0) {
      throw new Error("logAverage requires at least one data point");
    }
    var value = 0;
    for (var i = 0; i < x.length; i++) {
      if (x[i] < 0) {
        throw new Error(
          "logAverage requires only non-negative numbers as input"
        );
      }
      value += Math.log(x[i]);
    }
    return Math.exp(value / x.length);
  }
  function harmonicMean(x) {
    if (x.length === 0) {
      throw new Error("harmonicMean requires at least one data point");
    }
    var reciprocalSum = 0;
    for (var i = 0; i < x.length; i++) {
      if (x[i] <= 0) {
        throw new Error(
          "harmonicMean requires only positive numbers as input"
        );
      }
      reciprocalSum += 1 / x[i];
    }
    return x.length / reciprocalSum;
  }
  function meanSimple(x) {
    if (x.length === 0) {
      throw new Error("meanSimple requires at least one data point");
    }
    return sumSimple(x) / x.length;
  }
  function medianSorted(sorted) {
    return quantileSorted(sorted, 0.5);
  }
  function subtractFromMean(mean2, n, value) {
    return (mean2 * n - value) / (n - 1);
  }
  function rootMeanSquare(x) {
    if (x.length === 0) {
      throw new Error("rootMeanSquare requires at least one data point");
    }
    var sumOfSquares = 0;
    for (var i = 0; i < x.length; i++) {
      sumOfSquares += Math.pow(x[i], 2);
    }
    return Math.sqrt(sumOfSquares / x.length);
  }
  function coefficientOfVariation(x) {
    return sampleStandardDeviation(x) / mean(x);
  }
  function tTest(x, expectedValue) {
    var sampleMean = mean(x);
    var sd = standardDeviation(x);
    var rootN = Math.sqrt(x.length);
    return (sampleMean - expectedValue) / (sd / rootN);
  }
  function tTestTwoSample(sampleX, sampleY, difference) {
    var n = sampleX.length;
    var m = sampleY.length;
    if (!n || !m) {
      return null;
    }
    if (!difference) {
      difference = 0;
    }
    var meanX = mean(sampleX);
    var meanY = mean(sampleY);
    var sampleVarianceX = sampleVariance(sampleX);
    var sampleVarianceY = sampleVariance(sampleY);
    if (typeof meanX === "number" && typeof meanY === "number" && typeof sampleVarianceX === "number" && typeof sampleVarianceY === "number") {
      var weightedVariance = ((n - 1) * sampleVarianceX + (m - 1) * sampleVarianceY) / (n + m - 2);
      return (meanX - meanY - difference) / Math.sqrt(weightedVariance * (1 / n + 1 / m));
    }
  }
  function wilcoxonRankSum(sampleX, sampleY) {
    if (!sampleX.length || !sampleY.length) {
      throw new Error("Neither sample can be empty");
    }
    var pooledSamples = sampleX.map(function(x) {
      return { label: "x", value: x };
    }).concat(sampleY.map(function(y) {
      return { label: "y", value: y };
    })).sort(function(a, b) {
      return a.value - b.value;
    });
    for (var rank = 0; rank < pooledSamples.length; rank++) {
      pooledSamples[rank].rank = rank;
    }
    var tiedRanks = [pooledSamples[0].rank];
    for (var i = 1; i < pooledSamples.length; i++) {
      if (pooledSamples[i].value === pooledSamples[i - 1].value) {
        tiedRanks.push(pooledSamples[i].rank);
        if (i === pooledSamples.length - 1) {
          replaceRanksInPlace(pooledSamples, tiedRanks);
        }
      } else if (tiedRanks.length > 1) {
        replaceRanksInPlace(pooledSamples, tiedRanks);
      } else {
        tiedRanks = [pooledSamples[i].rank];
      }
    }
    function replaceRanksInPlace(pooledSamples2, tiedRanks2) {
      var average = (tiedRanks2[0] + tiedRanks2[tiedRanks2.length - 1]) / 2;
      for (var i2 = 0; i2 < tiedRanks2.length; i2++) {
        pooledSamples2[tiedRanks2[i2]].rank = average;
      }
    }
    var rankSum = 0;
    for (var i$1 = 0; i$1 < pooledSamples.length; i$1++) {
      var sample2 = pooledSamples[i$1];
      if (sample2.label === "x") {
        rankSum += sample2.rank + 1;
      }
    }
    return rankSum;
  }
  function factorial(n) {
    if (n < 0) {
      throw new Error("factorial requires a non-negative value");
    }
    if (Math.floor(n) !== n) {
      throw new Error("factorial requires an integer input");
    }
    var accumulator = 1;
    for (var i = 2; i <= n; i++) {
      accumulator *= i;
    }
    return accumulator;
  }
  function gamma(n) {
    if (Number.isInteger(n)) {
      if (n <= 0) {
        return NaN;
      } else {
        return factorial(n - 1);
      }
    }
    n--;
    if (n < 0) {
      return Math.PI / (Math.sin(Math.PI * -n) * gamma(-n));
    } else {
      var seriesCoefficient = Math.pow(n / Math.E, n) * Math.sqrt(2 * Math.PI * (n + 1 / 6));
      var seriesDenom = n + 1 / 4;
      var seriesExpansion = 1 + 1 / 144 / Math.pow(seriesDenom, 2) - 1 / 12960 / Math.pow(seriesDenom, 3) - 257 / 207360 / Math.pow(seriesDenom, 4) - 52 / 2612736 / Math.pow(seriesDenom, 5) + 5741173 / 9405849600 / Math.pow(seriesDenom, 6) + 37529 / 18811699200 / Math.pow(seriesDenom, 7);
      return seriesCoefficient * seriesExpansion;
    }
  }
  function gammaln(n) {
    if (n <= 0) {
      return Infinity;
    }
    n--;
    var a = COEFFICIENTS[0];
    for (var i = 1; i < 15; i++) {
      a += COEFFICIENTS[i] / (n + i);
    }
    var tmp = g + 0.5 + n;
    return LOGSQRT2PI + Math.log(a) - tmp + (n + 0.5) * Math.log(tmp);
  }
  function bernoulliDistribution(p) {
    if (p < 0 || p > 1) {
      throw new Error(
        "bernoulliDistribution requires probability to be between 0 and 1 inclusive"
      );
    }
    return [1 - p, p];
  }
  function binomialDistribution(trials, probability) {
    if (probability < 0 || probability > 1 || trials <= 0 || trials % 1 !== 0) {
      return void 0;
    }
    var x = 0;
    var cumulativeProbability = 0;
    var cells = [];
    var binomialCoefficient = 1;
    do {
      cells[x] = binomialCoefficient * Math.pow(probability, x) * Math.pow(1 - probability, trials - x);
      cumulativeProbability += cells[x];
      x++;
      binomialCoefficient = binomialCoefficient * (trials - x + 1) / x;
    } while (cumulativeProbability < 1 - epsilon);
    return cells;
  }
  function poissonDistribution(lambda) {
    if (lambda <= 0) {
      return void 0;
    }
    var x = 0;
    var cumulativeProbability = 0;
    var cells = [];
    var factorialX = 1;
    do {
      cells[x] = Math.exp(-lambda) * Math.pow(lambda, x) / factorialX;
      cumulativeProbability += cells[x];
      x++;
      factorialX *= x;
    } while (cumulativeProbability < 1 - epsilon);
    return cells;
  }
  function chiSquaredGoodnessOfFit(data, distributionType, significance) {
    var inputMean = mean(data);
    var chiSquared = 0;
    var c = 1;
    var hypothesizedDistribution = distributionType(inputMean);
    var observedFrequencies = [];
    var expectedFrequencies = [];
    for (var i = 0; i < data.length; i++) {
      if (observedFrequencies[data[i]] === void 0) {
        observedFrequencies[data[i]] = 0;
      }
      observedFrequencies[data[i]]++;
    }
    for (var i$1 = 0; i$1 < observedFrequencies.length; i$1++) {
      if (observedFrequencies[i$1] === void 0) {
        observedFrequencies[i$1] = 0;
      }
    }
    for (var k in hypothesizedDistribution) {
      if (k in observedFrequencies) {
        expectedFrequencies[+k] = hypothesizedDistribution[k] * data.length;
      }
    }
    for (var k$1 = expectedFrequencies.length - 1; k$1 >= 0; k$1--) {
      if (expectedFrequencies[k$1] < 3) {
        expectedFrequencies[k$1 - 1] += expectedFrequencies[k$1];
        expectedFrequencies.pop();
        observedFrequencies[k$1 - 1] += observedFrequencies[k$1];
        observedFrequencies.pop();
      }
    }
    for (var k$2 = 0; k$2 < observedFrequencies.length; k$2++) {
      chiSquared += Math.pow(observedFrequencies[k$2] - expectedFrequencies[k$2], 2) / expectedFrequencies[k$2];
    }
    var degreesOfFreedom = observedFrequencies.length - c - 1;
    return chiSquaredDistributionTable[degreesOfFreedom][significance] < chiSquared;
  }
  function kernelDensityEstimation(X, kernel, bandwidthMethod) {
    var kernelFn;
    if (kernel === void 0) {
      kernelFn = kernels.gaussian;
    } else if (typeof kernel === "string") {
      if (!kernels[kernel]) {
        throw new Error('Unknown kernel "' + kernel + '"');
      }
      kernelFn = kernels[kernel];
    } else {
      kernelFn = kernel;
    }
    var bandwidth;
    if (typeof bandwidthMethod === "undefined") {
      bandwidth = bandwidthMethods.nrd(X);
    } else if (typeof bandwidthMethod === "string") {
      if (!bandwidthMethods[bandwidthMethod]) {
        throw new Error(
          'Unknown bandwidth method "' + bandwidthMethod + '"'
        );
      }
      bandwidth = bandwidthMethods[bandwidthMethod](X);
    } else {
      bandwidth = bandwidthMethod;
    }
    return function(x) {
      var i = 0;
      var sum2 = 0;
      for (i = 0; i < X.length; i++) {
        sum2 += kernelFn((x - X[i]) / bandwidth);
      }
      return sum2 / bandwidth / X.length;
    };
  }
  function zScore(x, mean2, standardDeviation2) {
    return (x - mean2) / standardDeviation2;
  }
  function cumulativeDistribution(z) {
    var sum2 = z, tmp = z;
    for (var i = 1; i < 15; i++) {
      tmp *= z * z / (2 * i + 1);
      sum2 += tmp;
    }
    return Math.round((0.5 + sum2 / SQRT_2PI * Math.exp(-z * z / 2)) * 1e4) / 1e4;
  }
  function cumulativeStdNormalProbability(z) {
    var absZ = Math.abs(z);
    var index = Math.min(
      Math.round(absZ * 100),
      standardNormalTable.length - 1
    );
    if (z >= 0) {
      return standardNormalTable[index];
    } else {
      return +(1 - standardNormalTable[index]).toFixed(4);
    }
  }
  function cumulativeStdLogisticProbability(x) {
    return 1 / (Math.exp(-x) + 1);
  }
  function errorFunction(x) {
    var t = 1 / (1 + 0.5 * Math.abs(x));
    var tau = t * Math.exp(
      -x * x + ((((((((0.17087277 * t - 0.82215223) * t + 1.48851587) * t - 1.13520398) * t + 0.27886807) * t - 0.18628806) * t + 0.09678418) * t + 0.37409196) * t + 1.00002368) * t - 1.26551223
    );
    if (x >= 0) {
      return 1 - tau;
    } else {
      return tau - 1;
    }
  }
  function inverseErrorFunction(x) {
    var a = 8 * (Math.PI - 3) / (3 * Math.PI * (4 - Math.PI));
    var inv = Math.sqrt(
      Math.sqrt(
        Math.pow(2 / (Math.PI * a) + Math.log(1 - x * x) / 2, 2) - Math.log(1 - x * x) / a
      ) - (2 / (Math.PI * a) + Math.log(1 - x * x) / 2)
    );
    if (x >= 0) {
      return inv;
    } else {
      return -inv;
    }
  }
  function probit(p) {
    if (p === 0) {
      p = epsilon;
    } else if (p >= 1) {
      p = 1 - epsilon;
    }
    return Math.sqrt(2) * inverseErrorFunction(2 * p - 1);
  }
  function logit(p) {
    if (p <= 0 || p >= 1) {
      throw new Error("p must be strictly between zero and one");
    }
    return Math.log(p / (1 - p));
  }
  function permutationTest(sampleX, sampleY, alternative, k, randomSource) {
    if (k === void 0) {
      k = 1e4;
    }
    if (alternative === void 0) {
      alternative = "two_side";
    }
    if (alternative !== "two_side" && alternative !== "greater" && alternative !== "less") {
      throw new Error(
        "`alternative` must be either 'two_side', 'greater', or 'less'."
      );
    }
    var meanX = mean(sampleX);
    var meanY = mean(sampleY);
    var testStatistic = meanX - meanY;
    var testStatDsn = new Array(k);
    var allData = sampleX.concat(sampleY);
    var midIndex = Math.floor(allData.length / 2);
    for (var i = 0; i < k; i++) {
      shuffleInPlace(allData, randomSource);
      var permLeft = allData.slice(0, midIndex);
      var permRight = allData.slice(midIndex, allData.length);
      var permTestStatistic = mean(permLeft) - mean(permRight);
      testStatDsn[i] = permTestStatistic;
    }
    var numExtremeTStats = 0;
    if (alternative === "two_side") {
      for (var i$1 = 0; i$1 <= k; i$1++) {
        if (Math.abs(testStatDsn[i$1]) >= Math.abs(testStatistic)) {
          numExtremeTStats += 1;
        }
      }
    } else if (alternative === "greater") {
      for (var i$2 = 0; i$2 <= k; i$2++) {
        if (testStatDsn[i$2] >= testStatistic) {
          numExtremeTStats += 1;
        }
      }
    } else {
      for (var i$3 = 0; i$3 <= k; i$3++) {
        if (testStatDsn[i$3] <= testStatistic) {
          numExtremeTStats += 1;
        }
      }
    }
    return numExtremeTStats / k;
  }
  function sign(x) {
    if (typeof x === "number") {
      if (x < 0) {
        return -1;
      } else if (x === 0) {
        return 0;
      } else {
        return 1;
      }
    } else {
      throw new TypeError("not a number");
    }
  }
  function bisect(func, start, end, maxIterations, errorTolerance) {
    if (typeof func !== "function") {
      throw new TypeError("func must be a function");
    }
    for (var i = 0; i < maxIterations; i++) {
      var output = (start + end) / 2;
      if (func(output) === 0 || Math.abs((end - start) / 2) < errorTolerance) {
        return output;
      }
      if (sign(func(output)) === sign(func(start))) {
        start = output;
      } else {
        end = output;
      }
    }
    throw new Error("maximum number of iterations exceeded");
  }
  function euclideanDistance(left, right) {
    var sum2 = 0;
    for (var i = 0; i < left.length; i++) {
      var diff = left[i] - right[i];
      sum2 += diff * diff;
    }
    return Math.sqrt(sum2);
  }
  function kMeansCluster(points, numCluster, randomSource) {
    if (randomSource === void 0)
      randomSource = Math.random;
    var oldCentroids = null;
    var newCentroids = sample(points, numCluster, randomSource);
    var labels = null;
    var change = Number.MAX_VALUE;
    while (change !== 0) {
      labels = labelPoints(points, newCentroids);
      oldCentroids = newCentroids;
      newCentroids = calculateCentroids(points, labels, numCluster);
      change = calculateChange(newCentroids, oldCentroids);
    }
    return {
      labels,
      centroids: newCentroids
    };
  }
  function labelPoints(points, centroids) {
    return points.map(function(p) {
      var minDist = Number.MAX_VALUE;
      var label = -1;
      for (var i = 0; i < centroids.length; i++) {
        var dist = euclideanDistance(p, centroids[i]);
        if (dist < minDist) {
          minDist = dist;
          label = i;
        }
      }
      return label;
    });
  }
  function calculateCentroids(points, labels, numCluster) {
    var dimension = points[0].length;
    var centroids = makeMatrix(numCluster, dimension);
    var counts = Array(numCluster).fill(0);
    var numPoints = points.length;
    for (var i = 0; i < numPoints; i++) {
      var point = points[i];
      var label = labels[i];
      var current = centroids[label];
      for (var j = 0; j < dimension; j++) {
        current[j] += point[j];
      }
      counts[label] += 1;
    }
    for (var i$1 = 0; i$1 < numCluster; i$1++) {
      if (counts[i$1] === 0) {
        throw new Error("Centroid " + i$1 + " has no friends");
      }
      var centroid = centroids[i$1];
      for (var j$1 = 0; j$1 < dimension; j$1++) {
        centroid[j$1] /= counts[i$1];
      }
    }
    return centroids;
  }
  function calculateChange(left, right) {
    var total = 0;
    for (var i = 0; i < left.length; i++) {
      total += euclideanDistance(left[i], right[i]);
    }
    return total;
  }
  function silhouette(points, labels) {
    if (points.length !== labels.length) {
      throw new Error("must have exactly as many labels as points");
    }
    var groupings = createGroups(labels);
    var distances = calculateAllDistances(points);
    var result = [];
    for (var i = 0; i < points.length; i++) {
      var s = 0;
      if (groupings[labels[i]].length > 1) {
        var a = meanDistanceFromPointToGroup(
          i,
          groupings[labels[i]],
          distances
        );
        var b = meanDistanceToNearestGroup(
          i,
          labels,
          groupings,
          distances
        );
        s = (b - a) / Math.max(a, b);
      }
      result.push(s);
    }
    return result;
  }
  function createGroups(labels) {
    var numGroups = 1 + max(labels);
    var result = Array(numGroups);
    for (var i = 0; i < labels.length; i++) {
      var label = labels[i];
      if (result[label] === void 0) {
        result[label] = [];
      }
      result[label].push(i);
    }
    return result;
  }
  function calculateAllDistances(points) {
    var numPoints = points.length;
    var result = makeMatrix(numPoints, numPoints);
    for (var i = 0; i < numPoints; i++) {
      for (var j = 0; j < i; j++) {
        result[i][j] = euclideanDistance(points[i], points[j]);
        result[j][i] = result[i][j];
      }
    }
    return result;
  }
  function meanDistanceToNearestGroup(which, labels, groupings, distances) {
    var label = labels[which];
    var result = Number.MAX_VALUE;
    for (var i = 0; i < groupings.length; i++) {
      if (i !== label) {
        var d = meanDistanceFromPointToGroup(
          which,
          groupings[i],
          distances
        );
        if (d < result) {
          result = d;
        }
      }
    }
    return result;
  }
  function meanDistanceFromPointToGroup(which, group, distances) {
    var total = 0;
    for (var i = 0; i < group.length; i++) {
      total += distances[which][group[i]];
    }
    return total / group.length;
  }
  function silhouetteMetric(points, labels) {
    var values = silhouette(points, labels);
    return max(values);
  }
  function relativeError(actual, expected) {
    if (actual === 0 && expected === 0) {
      return 0;
    }
    return Math.abs((actual - expected) / expected);
  }
  function approxEqual(actual, expected, tolerance) {
    if (tolerance === void 0)
      tolerance = epsilon;
    return relativeError(actual, expected) <= tolerance;
  }
  var BayesianClassifier, PerceptronModel, epsilon, COEFFICIENTS, g, LOGSQRT2PI, chiSquaredDistributionTable, SQRT_2PI$1, kernels, bandwidthMethods, SQRT_2PI, standardNormalTable, z;
  var init_simple_statistics = __esm({
    "../node_modules/.pnpm/simple-statistics@7.8.2/node_modules/simple-statistics/dist/simple-statistics.mjs"() {
      BayesianClassifier = function BayesianClassifier2() {
        this.totalCount = 0;
        this.data = {};
      };
      BayesianClassifier.prototype.train = function train(item, category) {
        if (!this.data[category]) {
          this.data[category] = {};
        }
        for (var k in item) {
          var v = item[k];
          if (this.data[category][k] === void 0) {
            this.data[category][k] = {};
          }
          if (this.data[category][k][v] === void 0) {
            this.data[category][k][v] = 0;
          }
          this.data[category][k][v]++;
        }
        this.totalCount++;
      };
      BayesianClassifier.prototype.score = function score(item) {
        var odds = {};
        var category;
        for (var k in item) {
          var v = item[k];
          for (category in this.data) {
            odds[category] = {};
            if (this.data[category][k]) {
              odds[category][k + "_" + v] = (this.data[category][k][v] || 0) / this.totalCount;
            } else {
              odds[category][k + "_" + v] = 0;
            }
          }
        }
        var oddsSums = {};
        for (category in odds) {
          oddsSums[category] = 0;
          for (var combination in odds[category]) {
            oddsSums[category] += odds[category][combination];
          }
        }
        return oddsSums;
      };
      PerceptronModel = function PerceptronModel2() {
        this.weights = [];
        this.bias = 0;
      };
      PerceptronModel.prototype.predict = function predict(features) {
        if (features.length !== this.weights.length) {
          return null;
        }
        var score2 = 0;
        for (var i = 0; i < this.weights.length; i++) {
          score2 += this.weights[i] * features[i];
        }
        score2 += this.bias;
        if (score2 > 0) {
          return 1;
        } else {
          return 0;
        }
      };
      PerceptronModel.prototype.train = function train2(features, label) {
        if (label !== 0 && label !== 1) {
          return null;
        }
        if (features.length !== this.weights.length) {
          this.weights = features;
          this.bias = 1;
        }
        var prediction = this.predict(features);
        if (typeof prediction === "number" && prediction !== label) {
          var gradient = label - prediction;
          for (var i = 0; i < this.weights.length; i++) {
            this.weights[i] += gradient * features[i];
          }
          this.bias += gradient;
        }
        return this;
      };
      epsilon = 1e-4;
      COEFFICIENTS = [
        0.9999999999999971,
        57.15623566586292,
        -59.59796035547549,
        14.136097974741746,
        -0.4919138160976202,
        3399464998481189e-20,
        4652362892704858e-20,
        -9837447530487956e-20,
        1580887032249125e-19,
        -21026444172410488e-20,
        21743961811521265e-20,
        -1643181065367639e-19,
        8441822398385275e-20,
        -26190838401581408e-21,
        36899182659531625e-22
      ];
      g = 607 / 128;
      LOGSQRT2PI = Math.log(Math.sqrt(2 * Math.PI));
      chiSquaredDistributionTable = {
        1: {
          0.995: 0,
          0.99: 0,
          0.975: 0,
          0.95: 0,
          0.9: 0.02,
          0.5: 0.45,
          0.1: 2.71,
          0.05: 3.84,
          0.025: 5.02,
          0.01: 6.63,
          5e-3: 7.88
        },
        2: {
          0.995: 0.01,
          0.99: 0.02,
          0.975: 0.05,
          0.95: 0.1,
          0.9: 0.21,
          0.5: 1.39,
          0.1: 4.61,
          0.05: 5.99,
          0.025: 7.38,
          0.01: 9.21,
          5e-3: 10.6
        },
        3: {
          0.995: 0.07,
          0.99: 0.11,
          0.975: 0.22,
          0.95: 0.35,
          0.9: 0.58,
          0.5: 2.37,
          0.1: 6.25,
          0.05: 7.81,
          0.025: 9.35,
          0.01: 11.34,
          5e-3: 12.84
        },
        4: {
          0.995: 0.21,
          0.99: 0.3,
          0.975: 0.48,
          0.95: 0.71,
          0.9: 1.06,
          0.5: 3.36,
          0.1: 7.78,
          0.05: 9.49,
          0.025: 11.14,
          0.01: 13.28,
          5e-3: 14.86
        },
        5: {
          0.995: 0.41,
          0.99: 0.55,
          0.975: 0.83,
          0.95: 1.15,
          0.9: 1.61,
          0.5: 4.35,
          0.1: 9.24,
          0.05: 11.07,
          0.025: 12.83,
          0.01: 15.09,
          5e-3: 16.75
        },
        6: {
          0.995: 0.68,
          0.99: 0.87,
          0.975: 1.24,
          0.95: 1.64,
          0.9: 2.2,
          0.5: 5.35,
          0.1: 10.65,
          0.05: 12.59,
          0.025: 14.45,
          0.01: 16.81,
          5e-3: 18.55
        },
        7: {
          0.995: 0.99,
          0.99: 1.25,
          0.975: 1.69,
          0.95: 2.17,
          0.9: 2.83,
          0.5: 6.35,
          0.1: 12.02,
          0.05: 14.07,
          0.025: 16.01,
          0.01: 18.48,
          5e-3: 20.28
        },
        8: {
          0.995: 1.34,
          0.99: 1.65,
          0.975: 2.18,
          0.95: 2.73,
          0.9: 3.49,
          0.5: 7.34,
          0.1: 13.36,
          0.05: 15.51,
          0.025: 17.53,
          0.01: 20.09,
          5e-3: 21.96
        },
        9: {
          0.995: 1.73,
          0.99: 2.09,
          0.975: 2.7,
          0.95: 3.33,
          0.9: 4.17,
          0.5: 8.34,
          0.1: 14.68,
          0.05: 16.92,
          0.025: 19.02,
          0.01: 21.67,
          5e-3: 23.59
        },
        10: {
          0.995: 2.16,
          0.99: 2.56,
          0.975: 3.25,
          0.95: 3.94,
          0.9: 4.87,
          0.5: 9.34,
          0.1: 15.99,
          0.05: 18.31,
          0.025: 20.48,
          0.01: 23.21,
          5e-3: 25.19
        },
        11: {
          0.995: 2.6,
          0.99: 3.05,
          0.975: 3.82,
          0.95: 4.57,
          0.9: 5.58,
          0.5: 10.34,
          0.1: 17.28,
          0.05: 19.68,
          0.025: 21.92,
          0.01: 24.72,
          5e-3: 26.76
        },
        12: {
          0.995: 3.07,
          0.99: 3.57,
          0.975: 4.4,
          0.95: 5.23,
          0.9: 6.3,
          0.5: 11.34,
          0.1: 18.55,
          0.05: 21.03,
          0.025: 23.34,
          0.01: 26.22,
          5e-3: 28.3
        },
        13: {
          0.995: 3.57,
          0.99: 4.11,
          0.975: 5.01,
          0.95: 5.89,
          0.9: 7.04,
          0.5: 12.34,
          0.1: 19.81,
          0.05: 22.36,
          0.025: 24.74,
          0.01: 27.69,
          5e-3: 29.82
        },
        14: {
          0.995: 4.07,
          0.99: 4.66,
          0.975: 5.63,
          0.95: 6.57,
          0.9: 7.79,
          0.5: 13.34,
          0.1: 21.06,
          0.05: 23.68,
          0.025: 26.12,
          0.01: 29.14,
          5e-3: 31.32
        },
        15: {
          0.995: 4.6,
          0.99: 5.23,
          0.975: 6.27,
          0.95: 7.26,
          0.9: 8.55,
          0.5: 14.34,
          0.1: 22.31,
          0.05: 25,
          0.025: 27.49,
          0.01: 30.58,
          5e-3: 32.8
        },
        16: {
          0.995: 5.14,
          0.99: 5.81,
          0.975: 6.91,
          0.95: 7.96,
          0.9: 9.31,
          0.5: 15.34,
          0.1: 23.54,
          0.05: 26.3,
          0.025: 28.85,
          0.01: 32,
          5e-3: 34.27
        },
        17: {
          0.995: 5.7,
          0.99: 6.41,
          0.975: 7.56,
          0.95: 8.67,
          0.9: 10.09,
          0.5: 16.34,
          0.1: 24.77,
          0.05: 27.59,
          0.025: 30.19,
          0.01: 33.41,
          5e-3: 35.72
        },
        18: {
          0.995: 6.26,
          0.99: 7.01,
          0.975: 8.23,
          0.95: 9.39,
          0.9: 10.87,
          0.5: 17.34,
          0.1: 25.99,
          0.05: 28.87,
          0.025: 31.53,
          0.01: 34.81,
          5e-3: 37.16
        },
        19: {
          0.995: 6.84,
          0.99: 7.63,
          0.975: 8.91,
          0.95: 10.12,
          0.9: 11.65,
          0.5: 18.34,
          0.1: 27.2,
          0.05: 30.14,
          0.025: 32.85,
          0.01: 36.19,
          5e-3: 38.58
        },
        20: {
          0.995: 7.43,
          0.99: 8.26,
          0.975: 9.59,
          0.95: 10.85,
          0.9: 12.44,
          0.5: 19.34,
          0.1: 28.41,
          0.05: 31.41,
          0.025: 34.17,
          0.01: 37.57,
          5e-3: 40
        },
        21: {
          0.995: 8.03,
          0.99: 8.9,
          0.975: 10.28,
          0.95: 11.59,
          0.9: 13.24,
          0.5: 20.34,
          0.1: 29.62,
          0.05: 32.67,
          0.025: 35.48,
          0.01: 38.93,
          5e-3: 41.4
        },
        22: {
          0.995: 8.64,
          0.99: 9.54,
          0.975: 10.98,
          0.95: 12.34,
          0.9: 14.04,
          0.5: 21.34,
          0.1: 30.81,
          0.05: 33.92,
          0.025: 36.78,
          0.01: 40.29,
          5e-3: 42.8
        },
        23: {
          0.995: 9.26,
          0.99: 10.2,
          0.975: 11.69,
          0.95: 13.09,
          0.9: 14.85,
          0.5: 22.34,
          0.1: 32.01,
          0.05: 35.17,
          0.025: 38.08,
          0.01: 41.64,
          5e-3: 44.18
        },
        24: {
          0.995: 9.89,
          0.99: 10.86,
          0.975: 12.4,
          0.95: 13.85,
          0.9: 15.66,
          0.5: 23.34,
          0.1: 33.2,
          0.05: 36.42,
          0.025: 39.36,
          0.01: 42.98,
          5e-3: 45.56
        },
        25: {
          0.995: 10.52,
          0.99: 11.52,
          0.975: 13.12,
          0.95: 14.61,
          0.9: 16.47,
          0.5: 24.34,
          0.1: 34.28,
          0.05: 37.65,
          0.025: 40.65,
          0.01: 44.31,
          5e-3: 46.93
        },
        26: {
          0.995: 11.16,
          0.99: 12.2,
          0.975: 13.84,
          0.95: 15.38,
          0.9: 17.29,
          0.5: 25.34,
          0.1: 35.56,
          0.05: 38.89,
          0.025: 41.92,
          0.01: 45.64,
          5e-3: 48.29
        },
        27: {
          0.995: 11.81,
          0.99: 12.88,
          0.975: 14.57,
          0.95: 16.15,
          0.9: 18.11,
          0.5: 26.34,
          0.1: 36.74,
          0.05: 40.11,
          0.025: 43.19,
          0.01: 46.96,
          5e-3: 49.65
        },
        28: {
          0.995: 12.46,
          0.99: 13.57,
          0.975: 15.31,
          0.95: 16.93,
          0.9: 18.94,
          0.5: 27.34,
          0.1: 37.92,
          0.05: 41.34,
          0.025: 44.46,
          0.01: 48.28,
          5e-3: 50.99
        },
        29: {
          0.995: 13.12,
          0.99: 14.26,
          0.975: 16.05,
          0.95: 17.71,
          0.9: 19.77,
          0.5: 28.34,
          0.1: 39.09,
          0.05: 42.56,
          0.025: 45.72,
          0.01: 49.59,
          5e-3: 52.34
        },
        30: {
          0.995: 13.79,
          0.99: 14.95,
          0.975: 16.79,
          0.95: 18.49,
          0.9: 20.6,
          0.5: 29.34,
          0.1: 40.26,
          0.05: 43.77,
          0.025: 46.98,
          0.01: 50.89,
          5e-3: 53.67
        },
        40: {
          0.995: 20.71,
          0.99: 22.16,
          0.975: 24.43,
          0.95: 26.51,
          0.9: 29.05,
          0.5: 39.34,
          0.1: 51.81,
          0.05: 55.76,
          0.025: 59.34,
          0.01: 63.69,
          5e-3: 66.77
        },
        50: {
          0.995: 27.99,
          0.99: 29.71,
          0.975: 32.36,
          0.95: 34.76,
          0.9: 37.69,
          0.5: 49.33,
          0.1: 63.17,
          0.05: 67.5,
          0.025: 71.42,
          0.01: 76.15,
          5e-3: 79.49
        },
        60: {
          0.995: 35.53,
          0.99: 37.48,
          0.975: 40.48,
          0.95: 43.19,
          0.9: 46.46,
          0.5: 59.33,
          0.1: 74.4,
          0.05: 79.08,
          0.025: 83.3,
          0.01: 88.38,
          5e-3: 91.95
        },
        70: {
          0.995: 43.28,
          0.99: 45.44,
          0.975: 48.76,
          0.95: 51.74,
          0.9: 55.33,
          0.5: 69.33,
          0.1: 85.53,
          0.05: 90.53,
          0.025: 95.02,
          0.01: 100.42,
          5e-3: 104.22
        },
        80: {
          0.995: 51.17,
          0.99: 53.54,
          0.975: 57.15,
          0.95: 60.39,
          0.9: 64.28,
          0.5: 79.33,
          0.1: 96.58,
          0.05: 101.88,
          0.025: 106.63,
          0.01: 112.33,
          5e-3: 116.32
        },
        90: {
          0.995: 59.2,
          0.99: 61.75,
          0.975: 65.65,
          0.95: 69.13,
          0.9: 73.29,
          0.5: 89.33,
          0.1: 107.57,
          0.05: 113.14,
          0.025: 118.14,
          0.01: 124.12,
          5e-3: 128.3
        },
        100: {
          0.995: 67.33,
          0.99: 70.06,
          0.975: 74.22,
          0.95: 77.93,
          0.9: 82.36,
          0.5: 99.33,
          0.1: 118.5,
          0.05: 124.34,
          0.025: 129.56,
          0.01: 135.81,
          5e-3: 140.17
        }
      };
      SQRT_2PI$1 = Math.sqrt(2 * Math.PI);
      kernels = {
        /**
         * The gaussian kernel.
         * @private
         */
        gaussian: function(u) {
          return Math.exp(-0.5 * u * u) / SQRT_2PI$1;
        }
      };
      bandwidthMethods = {
        /**
         * The ["normal reference distribution"
         * rule-of-thumb](https://stat.ethz.ch/R-manual/R-devel/library/MASS/html/bandwidth.nrd.html),
         * a commonly used version of [Silverman's
         * rule-of-thumb](https://en.wikipedia.org/wiki/Kernel_density_estimation#A_rule-of-thumb_bandwidth_estimator).
         * @private
         */
        nrd: function(x) {
          var s = sampleStandardDeviation(x);
          var iqr = interquartileRange(x);
          if (typeof iqr === "number") {
            s = Math.min(s, iqr / 1.34);
          }
          return 1.06 * s * Math.pow(x.length, -0.2);
        }
      };
      SQRT_2PI = Math.sqrt(2 * Math.PI);
      standardNormalTable = [];
      for (z = 0; z <= 3.09; z += 0.01) {
        standardNormalTable.push(cumulativeDistribution(z));
      }
    }
  });

  // src/schemas/worker-schema.ts
  var DextraWorker = class {
  };

  // ../node_modules/.pnpm/@loaders.gl+loader-utils@3.2.13/node_modules/@loaders.gl/loader-utils/dist/esm/lib/env-utils/assert.js
  function assert(condition, message) {
    if (!condition) {
      throw new Error(message || "loader assertion failed.");
    }
  }

  // ../node_modules/.pnpm/@loaders.gl+loader-utils@3.2.13/node_modules/@loaders.gl/loader-utils/dist/esm/lib/env-utils/globals.js
  var globals = {
    self: typeof self !== "undefined" && self,
    window: typeof window !== "undefined" && window,
    global: typeof global !== "undefined" && global,
    document: typeof document !== "undefined" && document
  };
  var self_ = globals.self || globals.window || globals.global || {};
  var window_ = globals.window || globals.self || globals.global || {};
  var global_ = globals.global || globals.self || globals.window || {};
  var document_ = globals.document || {};
  var isBrowser = Boolean(typeof process !== "object" || String(process) !== "[object process]" || process.browser);
  var matches = typeof process !== "undefined" && process.version && /v([0-9]*)/.exec(process.version);
  var nodeVersion = matches && parseFloat(matches[1]) || 0;

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/env-utils/version.js
  var VERSION = true ? "3.2.13" : DEFAULT_VERSION;
  if (false) {
    console.error("loaders.gl: The __VERSION__ variable is not injected using babel plugin. Latest unstable workers would be fetched from the CDN.");
  }

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/env-utils/assert.js
  function assert2(condition, message) {
    if (!condition) {
      throw new Error(message || "loaders.gl assertion failed.");
    }
  }

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/env-utils/globals.js
  var globals2 = {
    self: typeof self !== "undefined" && self,
    window: typeof window !== "undefined" && window,
    global: typeof global !== "undefined" && global,
    document: typeof document !== "undefined" && document
  };
  var self_2 = globals2.self || globals2.window || globals2.global || {};
  var window_2 = globals2.window || globals2.self || globals2.global || {};
  var global_2 = globals2.global || globals2.self || globals2.window || {};
  var document_2 = globals2.document || {};
  var isBrowser2 = typeof process !== "object" || String(process) !== "[object process]" || process.browser;
  var isMobile = typeof window !== "undefined" && typeof window.orientation !== "undefined";
  var matches2 = typeof process !== "undefined" && process.version && /v([0-9]*)/.exec(process.version);
  var nodeVersion2 = matches2 && parseFloat(matches2[1]) || 0;

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-farm/worker-job.js
  init_defineProperty();
  var WorkerJob = class {
    constructor(jobName, workerThread) {
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "workerThread", void 0);
      _defineProperty(this, "isRunning", true);
      _defineProperty(this, "result", void 0);
      _defineProperty(this, "_resolve", () => {
      });
      _defineProperty(this, "_reject", () => {
      });
      this.name = jobName;
      this.workerThread = workerThread;
      this.result = new Promise((resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
      });
    }
    postMessage(type, payload) {
      this.workerThread.postMessage({
        source: "loaders.gl",
        type,
        payload
      });
    }
    done(value) {
      assert2(this.isRunning);
      this.isRunning = false;
      this._resolve(value);
    }
    error(error) {
      assert2(this.isRunning);
      this.isRunning = false;
      this._reject(error);
    }
  };

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-farm/worker-thread.js
  init_defineProperty();

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/node/worker_threads-browser.js
  var Worker2 = class {
  };

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-utils/get-loadable-worker-url.js
  var workerURLCache = /* @__PURE__ */ new Map();
  function getLoadableWorkerURL(props) {
    assert2(props.source && !props.url || !props.source && props.url);
    let workerURL = workerURLCache.get(props.source || props.url);
    if (!workerURL) {
      if (props.url) {
        workerURL = getLoadableWorkerURLFromURL(props.url);
        workerURLCache.set(props.url, workerURL);
      }
      if (props.source) {
        workerURL = getLoadableWorkerURLFromSource(props.source);
        workerURLCache.set(props.source, workerURL);
      }
    }
    assert2(workerURL);
    return workerURL;
  }
  function getLoadableWorkerURLFromURL(url) {
    if (!url.startsWith("http")) {
      return url;
    }
    const workerSource = buildScriptSource(url);
    return getLoadableWorkerURLFromSource(workerSource);
  }
  function getLoadableWorkerURLFromSource(workerSource) {
    const blob = new Blob([workerSource], {
      type: "application/javascript"
    });
    return URL.createObjectURL(blob);
  }
  function buildScriptSource(workerUrl) {
    return "try {\n  importScripts('".concat(workerUrl, "');\n} catch (error) {\n  console.error(error);\n  throw error;\n}");
  }

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-utils/get-transfer-list.js
  function getTransferList(object, recursive = true, transfers) {
    const transfersSet = transfers || /* @__PURE__ */ new Set();
    if (!object) {
    } else if (isTransferable(object)) {
      transfersSet.add(object);
    } else if (isTransferable(object.buffer)) {
      transfersSet.add(object.buffer);
    } else if (ArrayBuffer.isView(object)) {
    } else if (recursive && typeof object === "object") {
      for (const key in object) {
        getTransferList(object[key], recursive, transfersSet);
      }
    }
    return transfers === void 0 ? Array.from(transfersSet) : [];
  }
  function isTransferable(object) {
    if (!object) {
      return false;
    }
    if (object instanceof ArrayBuffer) {
      return true;
    }
    if (typeof MessagePort !== "undefined" && object instanceof MessagePort) {
      return true;
    }
    if (typeof ImageBitmap !== "undefined" && object instanceof ImageBitmap) {
      return true;
    }
    if (typeof OffscreenCanvas !== "undefined" && object instanceof OffscreenCanvas) {
      return true;
    }
    return false;
  }

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-farm/worker-thread.js
  var NOOP = () => {
  };
  var WorkerThread = class {
    static isSupported() {
      return typeof Worker !== "undefined" && isBrowser2 || typeof Worker2 !== "undefined" && !isBrowser2;
    }
    constructor(props) {
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "source", void 0);
      _defineProperty(this, "url", void 0);
      _defineProperty(this, "terminated", false);
      _defineProperty(this, "worker", void 0);
      _defineProperty(this, "onMessage", void 0);
      _defineProperty(this, "onError", void 0);
      _defineProperty(this, "_loadableURL", "");
      const {
        name,
        source,
        url
      } = props;
      assert2(source || url);
      this.name = name;
      this.source = source;
      this.url = url;
      this.onMessage = NOOP;
      this.onError = (error) => console.log(error);
      this.worker = isBrowser2 ? this._createBrowserWorker() : this._createNodeWorker();
    }
    destroy() {
      this.onMessage = NOOP;
      this.onError = NOOP;
      this.worker.terminate();
      this.terminated = true;
    }
    get isRunning() {
      return Boolean(this.onMessage);
    }
    postMessage(data, transferList) {
      transferList = transferList || getTransferList(data);
      this.worker.postMessage(data, transferList);
    }
    _getErrorFromErrorEvent(event) {
      let message = "Failed to load ";
      message += "worker ".concat(this.name, " from ").concat(this.url, ". ");
      if (event.message) {
        message += "".concat(event.message, " in ");
      }
      if (event.lineno) {
        message += ":".concat(event.lineno, ":").concat(event.colno);
      }
      return new Error(message);
    }
    _createBrowserWorker() {
      this._loadableURL = getLoadableWorkerURL({
        source: this.source,
        url: this.url
      });
      const worker = new Worker(this._loadableURL, {
        name: this.name
      });
      worker.onmessage = (event) => {
        if (!event.data) {
          this.onError(new Error("No data received"));
        } else {
          this.onMessage(event.data);
        }
      };
      worker.onerror = (error) => {
        this.onError(this._getErrorFromErrorEvent(error));
        this.terminated = true;
      };
      worker.onmessageerror = (event) => console.error(event);
      return worker;
    }
    _createNodeWorker() {
      let worker;
      if (this.url) {
        const absolute = this.url.includes(":/") || this.url.startsWith("/");
        const url = absolute ? this.url : "./".concat(this.url);
        worker = new Worker2(url, {
          eval: false
        });
      } else if (this.source) {
        worker = new Worker2(this.source, {
          eval: true
        });
      } else {
        throw new Error("no worker");
      }
      worker.on("message", (data) => {
        this.onMessage(data);
      });
      worker.on("error", (error) => {
        this.onError(error);
      });
      worker.on("exit", (code) => {
      });
      return worker;
    }
  };

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-farm/worker-farm.js
  init_defineProperty();

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-farm/worker-pool.js
  init_defineProperty();
  var WorkerPool = class {
    static isSupported() {
      return WorkerThread.isSupported();
    }
    constructor(props) {
      _defineProperty(this, "name", "unnamed");
      _defineProperty(this, "source", void 0);
      _defineProperty(this, "url", void 0);
      _defineProperty(this, "maxConcurrency", 1);
      _defineProperty(this, "maxMobileConcurrency", 1);
      _defineProperty(this, "onDebug", () => {
      });
      _defineProperty(this, "reuseWorkers", true);
      _defineProperty(this, "props", {});
      _defineProperty(this, "jobQueue", []);
      _defineProperty(this, "idleQueue", []);
      _defineProperty(this, "count", 0);
      _defineProperty(this, "isDestroyed", false);
      this.source = props.source;
      this.url = props.url;
      this.setProps(props);
    }
    destroy() {
      this.idleQueue.forEach((worker) => worker.destroy());
      this.isDestroyed = true;
    }
    setProps(props) {
      this.props = {
        ...this.props,
        ...props
      };
      if (props.name !== void 0) {
        this.name = props.name;
      }
      if (props.maxConcurrency !== void 0) {
        this.maxConcurrency = props.maxConcurrency;
      }
      if (props.maxMobileConcurrency !== void 0) {
        this.maxMobileConcurrency = props.maxMobileConcurrency;
      }
      if (props.reuseWorkers !== void 0) {
        this.reuseWorkers = props.reuseWorkers;
      }
      if (props.onDebug !== void 0) {
        this.onDebug = props.onDebug;
      }
    }
    async startJob(name, onMessage2 = (job, type, data) => job.done(data), onError = (job, error) => job.error(error)) {
      const startPromise = new Promise((onStart) => {
        this.jobQueue.push({
          name,
          onMessage: onMessage2,
          onError,
          onStart
        });
        return this;
      });
      this._startQueuedJob();
      return await startPromise;
    }
    async _startQueuedJob() {
      if (!this.jobQueue.length) {
        return;
      }
      const workerThread = this._getAvailableWorker();
      if (!workerThread) {
        return;
      }
      const queuedJob = this.jobQueue.shift();
      if (queuedJob) {
        this.onDebug({
          message: "Starting job",
          name: queuedJob.name,
          workerThread,
          backlog: this.jobQueue.length
        });
        const job = new WorkerJob(queuedJob.name, workerThread);
        workerThread.onMessage = (data) => queuedJob.onMessage(job, data.type, data.payload);
        workerThread.onError = (error) => queuedJob.onError(job, error);
        queuedJob.onStart(job);
        try {
          await job.result;
        } finally {
          this.returnWorkerToQueue(workerThread);
        }
      }
    }
    returnWorkerToQueue(worker) {
      const shouldDestroyWorker = this.isDestroyed || !this.reuseWorkers || this.count > this._getMaxConcurrency();
      if (shouldDestroyWorker) {
        worker.destroy();
        this.count--;
      } else {
        this.idleQueue.push(worker);
      }
      if (!this.isDestroyed) {
        this._startQueuedJob();
      }
    }
    _getAvailableWorker() {
      if (this.idleQueue.length > 0) {
        return this.idleQueue.shift() || null;
      }
      if (this.count < this._getMaxConcurrency()) {
        this.count++;
        const name = "".concat(this.name.toLowerCase(), " (#").concat(this.count, " of ").concat(this.maxConcurrency, ")");
        return new WorkerThread({
          name,
          source: this.source,
          url: this.url
        });
      }
      return null;
    }
    _getMaxConcurrency() {
      return isMobile ? this.maxMobileConcurrency : this.maxConcurrency;
    }
  };

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-farm/worker-farm.js
  var DEFAULT_PROPS = {
    maxConcurrency: 3,
    maxMobileConcurrency: 1,
    reuseWorkers: true,
    onDebug: () => {
    }
  };
  var WorkerFarm = class {
    static isSupported() {
      return WorkerThread.isSupported();
    }
    static getWorkerFarm(props = {}) {
      WorkerFarm._workerFarm = WorkerFarm._workerFarm || new WorkerFarm({});
      WorkerFarm._workerFarm.setProps(props);
      return WorkerFarm._workerFarm;
    }
    constructor(props) {
      _defineProperty(this, "props", void 0);
      _defineProperty(this, "workerPools", /* @__PURE__ */ new Map());
      this.props = {
        ...DEFAULT_PROPS
      };
      this.setProps(props);
      this.workerPools = /* @__PURE__ */ new Map();
    }
    destroy() {
      for (const workerPool of this.workerPools.values()) {
        workerPool.destroy();
      }
      this.workerPools = /* @__PURE__ */ new Map();
    }
    setProps(props) {
      this.props = {
        ...this.props,
        ...props
      };
      for (const workerPool of this.workerPools.values()) {
        workerPool.setProps(this._getWorkerPoolProps());
      }
    }
    getWorkerPool(options) {
      const {
        name,
        source,
        url
      } = options;
      let workerPool = this.workerPools.get(name);
      if (!workerPool) {
        workerPool = new WorkerPool({
          name,
          source,
          url
        });
        workerPool.setProps(this._getWorkerPoolProps());
        this.workerPools.set(name, workerPool);
      }
      return workerPool;
    }
    _getWorkerPoolProps() {
      return {
        maxConcurrency: this.props.maxConcurrency,
        maxMobileConcurrency: this.props.maxMobileConcurrency,
        reuseWorkers: this.props.reuseWorkers,
        onDebug: this.props.onDebug
      };
    }
  };
  _defineProperty(WorkerFarm, "_workerFarm", void 0);

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-api/get-worker-url.js
  var NPM_TAG = "latest";
  function getWorkerURL(worker, options = {}) {
    const workerOptions = options[worker.id] || {};
    const workerFile = "".concat(worker.id, "-worker.js");
    let url = workerOptions.workerUrl;
    if (!url && worker.id === "compression") {
      url = options.workerUrl;
    }
    if (options._workerType === "test") {
      url = "modules/".concat(worker.module, "/dist/").concat(workerFile);
    }
    if (!url) {
      let version = worker.version;
      if (version === "latest") {
        version = NPM_TAG;
      }
      const versionTag = version ? "@".concat(version) : "";
      url = "https://unpkg.com/@loaders.gl/".concat(worker.module).concat(versionTag, "/dist/").concat(workerFile);
    }
    assert2(url);
    return url;
  }

  // ../node_modules/.pnpm/@loaders.gl+worker-utils@3.2.13/node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-api/validate-worker-version.js
  function validateWorkerVersion(worker, coreVersion = VERSION) {
    assert2(worker, "no worker provided");
    const workerVersion = worker.version;
    if (!coreVersion || !workerVersion) {
      return false;
    }
    return true;
  }

  // ../node_modules/.pnpm/@loaders.gl+loader-utils@3.2.13/node_modules/@loaders.gl/loader-utils/dist/esm/lib/worker-loader-utils/parse-with-worker.js
  function canParseWithWorker(loader, options) {
    if (!WorkerFarm.isSupported()) {
      return false;
    }
    if (!isBrowser2 && !(options !== null && options !== void 0 && options._nodeWorkers)) {
      return false;
    }
    return loader.worker && (options === null || options === void 0 ? void 0 : options.worker);
  }
  async function parseWithWorker(loader, data, options, context, parseOnMainThread) {
    const name = loader.id;
    const url = getWorkerURL(loader, options);
    const workerFarm = WorkerFarm.getWorkerFarm(options);
    const workerPool = workerFarm.getWorkerPool({
      name,
      url
    });
    options = JSON.parse(JSON.stringify(options));
    context = JSON.parse(JSON.stringify(context || {}));
    const job = await workerPool.startJob("process-on-worker", onMessage.bind(null, parseOnMainThread));
    job.postMessage("process", {
      input: data,
      options,
      context
    });
    const result = await job.result;
    return await result.result;
  }
  async function onMessage(parseOnMainThread, job, type, payload) {
    switch (type) {
      case "done":
        job.done(payload);
        break;
      case "error":
        job.error(new Error(payload.error));
        break;
      case "process":
        const {
          id,
          input,
          options
        } = payload;
        try {
          const result = await parseOnMainThread(input, options);
          job.postMessage("done", {
            id,
            result
          });
        } catch (error) {
          const message = error instanceof Error ? error.message : "unknown error";
          job.postMessage("error", {
            id,
            error: message
          });
        }
        break;
      default:
        console.warn("parse-with-worker unknown message ".concat(type));
    }
  }

  // ../node_modules/.pnpm/@loaders.gl+loader-utils@3.2.13/node_modules/@loaders.gl/loader-utils/dist/esm/lib/binary-utils/buffer-utils.js
  function isBuffer(value) {
    return value && typeof value === "object" && value.isBuffer;
  }
  function bufferToArrayBuffer(buffer) {
    if (isBuffer(buffer)) {
      const typedArray = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.length);
      return typedArray.slice().buffer;
    }
    return buffer;
  }

  // ../node_modules/.pnpm/@loaders.gl+loader-utils@3.2.13/node_modules/@loaders.gl/loader-utils/dist/esm/lib/binary-utils/array-buffer-utils.js
  function toArrayBuffer(data) {
    if (isBuffer(data)) {
      return bufferToArrayBuffer(data);
    }
    if (data instanceof ArrayBuffer) {
      return data;
    }
    if (ArrayBuffer.isView(data)) {
      if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {
        return data.buffer;
      }
      return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
    }
    if (typeof data === "string") {
      const text = data;
      const uint8Array = new TextEncoder().encode(text);
      return uint8Array.buffer;
    }
    if (data && typeof data === "object" && data._toArrayBuffer) {
      return data._toArrayBuffer();
    }
    throw new Error("toArrayBuffer");
  }
  function compareArrayBuffers(arrayBuffer1, arrayBuffer2, byteLength) {
    byteLength = byteLength || arrayBuffer1.byteLength;
    if (arrayBuffer1.byteLength < byteLength || arrayBuffer2.byteLength < byteLength) {
      return false;
    }
    const array1 = new Uint8Array(arrayBuffer1);
    const array2 = new Uint8Array(arrayBuffer2);
    for (let i = 0; i < array1.length; ++i) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  function concatenateArrayBuffers(...sources) {
    const sourceArrays = sources.map((source2) => source2 instanceof ArrayBuffer ? new Uint8Array(source2) : source2);
    const byteLength = sourceArrays.reduce((length, typedArray) => length + typedArray.byteLength, 0);
    const result = new Uint8Array(byteLength);
    let offset = 0;
    for (const sourceArray of sourceArrays) {
      result.set(sourceArray, offset);
      offset += sourceArray.byteLength;
    }
    return result.buffer;
  }

  // ../node_modules/.pnpm/@loaders.gl+loader-utils@3.2.13/node_modules/@loaders.gl/loader-utils/dist/esm/lib/iterators/async-iteration.js
  async function concatenateArrayBuffersAsync(asyncIterator) {
    const arrayBuffers = [];
    for await (const chunk2 of asyncIterator) {
      arrayBuffers.push(chunk2);
    }
    return concatenateArrayBuffers(...arrayBuffers);
  }

  // ../node_modules/.pnpm/@probe.gl+stats@3.6.0/node_modules/@probe.gl/stats/dist/esm/lib/stats.js
  init_defineProperty();

  // ../node_modules/.pnpm/@probe.gl+stats@3.6.0/node_modules/@probe.gl/stats/dist/esm/lib/stat.js
  init_defineProperty();

  // ../node_modules/.pnpm/@loaders.gl+loader-utils@3.2.13/node_modules/@loaders.gl/loader-utils/dist/esm/lib/path-utils/file-aliases.js
  var pathPrefix = "";
  var fileAliases = {};
  function resolvePath(filename2) {
    for (const alias in fileAliases) {
      if (filename2.startsWith(alias)) {
        const replacement = fileAliases[alias];
        filename2 = filename2.replace(alias, replacement);
      }
    }
    if (!filename2.startsWith("http://") && !filename2.startsWith("https://")) {
      filename2 = "".concat(pathPrefix).concat(filename2);
    }
    return filename2;
  }

  // ../node_modules/.pnpm/@loaders.gl+loader-utils@3.2.13/node_modules/@loaders.gl/loader-utils/dist/esm/lib/path-utils/path.js
  var path_exports = {};
  __export(path_exports, {
    dirname: () => dirname,
    filename: () => filename,
    join: () => join
  });
  function filename(url) {
    const slashIndex = url && url.lastIndexOf("/");
    return slashIndex >= 0 ? url.substr(slashIndex + 1) : "";
  }
  function dirname(url) {
    const slashIndex = url && url.lastIndexOf("/");
    return slashIndex >= 0 ? url.substr(0, slashIndex) : "";
  }
  function join(...parts) {
    const separator = "/";
    parts = parts.map((part, index) => {
      if (index) {
        part = part.replace(new RegExp("^".concat(separator)), "");
      }
      if (index !== parts.length - 1) {
        part = part.replace(new RegExp("".concat(separator, "$")), "");
      }
      return part;
    });
    return parts.join(separator);
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/javascript-utils/is-type.js
  var isBoolean = (x) => typeof x === "boolean";
  var isFunction = (x) => typeof x === "function";
  var isObject = (x) => x !== null && typeof x === "object";
  var isPureObject = (x) => isObject(x) && x.constructor === {}.constructor;
  var isIterable = (x) => x && typeof x[Symbol.iterator] === "function";
  var isAsyncIterable = (x) => x && typeof x[Symbol.asyncIterator] === "function";
  var isResponse = (x) => typeof Response !== "undefined" && x instanceof Response || x && x.arrayBuffer && x.text && x.json;
  var isBlob = (x) => typeof Blob !== "undefined" && x instanceof Blob;
  var isBuffer2 = (x) => x && typeof x === "object" && x.isBuffer;
  var isReadableDOMStream = (x) => typeof ReadableStream !== "undefined" && x instanceof ReadableStream || isObject(x) && isFunction(x.tee) && isFunction(x.cancel) && isFunction(x.getReader);
  var isReadableNodeStream = (x) => isObject(x) && isFunction(x.read) && isFunction(x.pipe) && isBoolean(x.readable);
  var isReadableStream = (x) => isReadableDOMStream(x) || isReadableNodeStream(x);

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/utils/mime-type-utils.js
  var DATA_URL_PATTERN = /^data:([-\w.]+\/[-\w.+]+)(;|,)/;
  var MIME_TYPE_PATTERN = /^([-\w.]+\/[-\w.+]+)/;
  function parseMIMEType(mimeString) {
    const matches3 = MIME_TYPE_PATTERN.exec(mimeString);
    if (matches3) {
      return matches3[1];
    }
    return mimeString;
  }
  function parseMIMETypeFromURL(url) {
    const matches3 = DATA_URL_PATTERN.exec(url);
    if (matches3) {
      return matches3[1];
    }
    return "";
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/utils/resource-utils.js
  var QUERY_STRING_PATTERN = /\?.*/;
  function getResourceUrlAndType(resource) {
    if (isResponse(resource)) {
      const url = stripQueryString(resource.url || "");
      const contentTypeHeader = resource.headers.get("content-type") || "";
      return {
        url,
        type: parseMIMEType(contentTypeHeader) || parseMIMETypeFromURL(url)
      };
    }
    if (isBlob(resource)) {
      return {
        url: stripQueryString(resource.name || ""),
        type: resource.type || ""
      };
    }
    if (typeof resource === "string") {
      return {
        url: stripQueryString(resource),
        type: parseMIMETypeFromURL(resource)
      };
    }
    return {
      url: "",
      type: ""
    };
  }
  function getResourceContentLength(resource) {
    if (isResponse(resource)) {
      return resource.headers["content-length"] || -1;
    }
    if (isBlob(resource)) {
      return resource.size;
    }
    if (typeof resource === "string") {
      return resource.length;
    }
    if (resource instanceof ArrayBuffer) {
      return resource.byteLength;
    }
    if (ArrayBuffer.isView(resource)) {
      return resource.byteLength;
    }
    return -1;
  }
  function stripQueryString(url) {
    return url.replace(QUERY_STRING_PATTERN, "");
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/utils/response-utils.js
  async function makeResponse(resource) {
    if (isResponse(resource)) {
      return resource;
    }
    const headers = {};
    const contentLength = getResourceContentLength(resource);
    if (contentLength >= 0) {
      headers["content-length"] = String(contentLength);
    }
    const {
      url,
      type
    } = getResourceUrlAndType(resource);
    if (type) {
      headers["content-type"] = type;
    }
    const initialDataUrl = await getInitialDataUrl(resource);
    if (initialDataUrl) {
      headers["x-first-bytes"] = initialDataUrl;
    }
    if (typeof resource === "string") {
      resource = new TextEncoder().encode(resource);
    }
    const response = new Response(resource, {
      headers
    });
    Object.defineProperty(response, "url", {
      value: url
    });
    return response;
  }
  async function checkResponse(response) {
    if (!response.ok) {
      const message = await getResponseError(response);
      throw new Error(message);
    }
  }
  async function getResponseError(response) {
    let message = "Failed to fetch resource ".concat(response.url, " (").concat(response.status, "): ");
    try {
      const contentType = response.headers.get("Content-Type");
      let text = response.statusText;
      if (contentType.includes("application/json")) {
        text += " ".concat(await response.text());
      }
      message += text;
      message = message.length > 60 ? "".concat(message.slice(0, 60), "...") : message;
    } catch (error) {
    }
    return message;
  }
  async function getInitialDataUrl(resource) {
    const INITIAL_DATA_LENGTH = 5;
    if (typeof resource === "string") {
      return "data:,".concat(resource.slice(0, INITIAL_DATA_LENGTH));
    }
    if (resource instanceof Blob) {
      const blobSlice = resource.slice(0, 5);
      return await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          var _event$target;
          return resolve(event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result);
        };
        reader.readAsDataURL(blobSlice);
      });
    }
    if (resource instanceof ArrayBuffer) {
      const slice = resource.slice(0, INITIAL_DATA_LENGTH);
      const base64 = arrayBufferToBase64(slice);
      return "data:base64,".concat(base64);
    }
    return null;
  }
  function arrayBufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/fetch/fetch-file.js
  async function fetchFile(url, options) {
    if (typeof url === "string") {
      url = resolvePath(url);
      let fetchOptions = options;
      if (options !== null && options !== void 0 && options.fetch && typeof (options === null || options === void 0 ? void 0 : options.fetch) !== "function") {
        fetchOptions = options.fetch;
      }
      return await fetch(url, fetchOptions);
    }
    return await makeResponse(url);
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/loader-utils/loggers.js
  init_defineProperty();

  // ../node_modules/.pnpm/@probe.gl+env@3.6.0/node_modules/@probe.gl/env/dist/esm/lib/is-electron.js
  function isElectron(mockUserAgent) {
    if (typeof window !== "undefined" && typeof window.process === "object" && window.process.type === "renderer") {
      return true;
    }
    if (typeof process !== "undefined" && typeof process.versions === "object" && Boolean(process.versions["electron"])) {
      return true;
    }
    const realUserAgent = typeof navigator === "object" && typeof navigator.userAgent === "string" && navigator.userAgent;
    const userAgent = mockUserAgent || realUserAgent;
    if (userAgent && userAgent.indexOf("Electron") >= 0) {
      return true;
    }
    return false;
  }

  // ../node_modules/.pnpm/@probe.gl+env@3.6.0/node_modules/@probe.gl/env/dist/esm/lib/is-browser.js
  function isBrowser3() {
    const isNode = typeof process === "object" && String(process) === "[object process]" && !process.browser;
    return !isNode || isElectron();
  }

  // ../node_modules/.pnpm/@probe.gl+env@3.6.0/node_modules/@probe.gl/env/dist/esm/lib/globals.js
  var globals3 = {
    self: typeof self !== "undefined" && self,
    window: typeof window !== "undefined" && window,
    global: typeof global !== "undefined" && global,
    document: typeof document !== "undefined" && document,
    process: typeof process === "object" && process
  };
  var self_3 = globals3.self || globals3.window || globals3.global;
  var window_3 = globals3.window || globals3.self || globals3.global;
  var document_3 = globals3.document || {};
  var process_ = globals3.process || {};

  // ../node_modules/.pnpm/@probe.gl+env@3.6.0/node_modules/@probe.gl/env/dist/esm/utils/globals.js
  var VERSION2 = true ? "0.0.1" : "untranspiled source";
  var isBrowser4 = isBrowser3();

  // ../node_modules/.pnpm/@probe.gl+log@3.6.0/node_modules/@probe.gl/log/dist/esm/log.js
  init_defineProperty();

  // ../node_modules/.pnpm/@probe.gl+log@3.6.0/node_modules/@probe.gl/log/dist/esm/utils/local-storage.js
  init_defineProperty();
  function getStorage(type) {
    try {
      const storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return storage;
    } catch (e) {
      return null;
    }
  }
  var LocalStorage = class {
    constructor(id, defaultConfig) {
      let type = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "sessionStorage";
      _defineProperty(this, "storage", void 0);
      _defineProperty(this, "id", void 0);
      _defineProperty(this, "config", void 0);
      this.storage = getStorage(type);
      this.id = id;
      this.config = defaultConfig;
      this._loadConfiguration();
    }
    getConfiguration() {
      return this.config;
    }
    setConfiguration(configuration) {
      Object.assign(this.config, configuration);
      if (this.storage) {
        const serialized = JSON.stringify(this.config);
        this.storage.setItem(this.id, serialized);
      }
    }
    _loadConfiguration() {
      let configuration = {};
      if (this.storage) {
        const serializedConfiguration = this.storage.getItem(this.id);
        configuration = serializedConfiguration ? JSON.parse(serializedConfiguration) : {};
      }
      Object.assign(this.config, configuration);
      return this;
    }
  };

  // ../node_modules/.pnpm/@probe.gl+log@3.6.0/node_modules/@probe.gl/log/dist/esm/utils/formatters.js
  function formatTime(ms) {
    let formatted;
    if (ms < 10) {
      formatted = "".concat(ms.toFixed(2), "ms");
    } else if (ms < 100) {
      formatted = "".concat(ms.toFixed(1), "ms");
    } else if (ms < 1e3) {
      formatted = "".concat(ms.toFixed(0), "ms");
    } else {
      formatted = "".concat((ms / 1e3).toFixed(2), "s");
    }
    return formatted;
  }
  function leftPad(string) {
    let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 8;
    const padLength = Math.max(length - string.length, 0);
    return "".concat(" ".repeat(padLength)).concat(string);
  }
  function formatImage(image, message, scale) {
    let maxWidth = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 600;
    const imageUrl = image.src.replace(/\(/g, "%28").replace(/\)/g, "%29");
    if (image.width > maxWidth) {
      scale = Math.min(scale, maxWidth / image.width);
    }
    const width = image.width * scale;
    const height = image.height * scale;
    const style = ["font-size:1px;", "padding:".concat(Math.floor(height / 2), "px ").concat(Math.floor(width / 2), "px;"), "line-height:".concat(height, "px;"), "background:url(".concat(imageUrl, ");"), "background-size:".concat(width, "px ").concat(height, "px;"), "color:transparent;"].join("");
    return ["".concat(message, " %c+"), style];
  }

  // ../node_modules/.pnpm/@probe.gl+log@3.6.0/node_modules/@probe.gl/log/dist/esm/utils/color.js
  var COLOR;
  (function(COLOR2) {
    COLOR2[COLOR2["BLACK"] = 30] = "BLACK";
    COLOR2[COLOR2["RED"] = 31] = "RED";
    COLOR2[COLOR2["GREEN"] = 32] = "GREEN";
    COLOR2[COLOR2["YELLOW"] = 33] = "YELLOW";
    COLOR2[COLOR2["BLUE"] = 34] = "BLUE";
    COLOR2[COLOR2["MAGENTA"] = 35] = "MAGENTA";
    COLOR2[COLOR2["CYAN"] = 36] = "CYAN";
    COLOR2[COLOR2["WHITE"] = 37] = "WHITE";
    COLOR2[COLOR2["BRIGHT_BLACK"] = 90] = "BRIGHT_BLACK";
    COLOR2[COLOR2["BRIGHT_RED"] = 91] = "BRIGHT_RED";
    COLOR2[COLOR2["BRIGHT_GREEN"] = 92] = "BRIGHT_GREEN";
    COLOR2[COLOR2["BRIGHT_YELLOW"] = 93] = "BRIGHT_YELLOW";
    COLOR2[COLOR2["BRIGHT_BLUE"] = 94] = "BRIGHT_BLUE";
    COLOR2[COLOR2["BRIGHT_MAGENTA"] = 95] = "BRIGHT_MAGENTA";
    COLOR2[COLOR2["BRIGHT_CYAN"] = 96] = "BRIGHT_CYAN";
    COLOR2[COLOR2["BRIGHT_WHITE"] = 97] = "BRIGHT_WHITE";
  })(COLOR || (COLOR = {}));
  function getColor(color) {
    return typeof color === "string" ? COLOR[color.toUpperCase()] || COLOR.WHITE : color;
  }
  function addColor(string, color, background) {
    if (!isBrowser3 && typeof string === "string") {
      if (color) {
        color = getColor(color);
        string = "\x1B[".concat(color, "m").concat(string, "\x1B[39m");
      }
      if (background) {
        color = getColor(background);
        string = "\x1B[".concat(background + 10, "m").concat(string, "\x1B[49m");
      }
    }
    return string;
  }

  // ../node_modules/.pnpm/@probe.gl+log@3.6.0/node_modules/@probe.gl/log/dist/esm/utils/autobind.js
  function autobind(obj) {
    let predefined = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ["constructor"];
    const proto = Object.getPrototypeOf(obj);
    const propNames = Object.getOwnPropertyNames(proto);
    for (const key of propNames) {
      if (typeof obj[key] === "function") {
        if (!predefined.find((name) => key === name)) {
          obj[key] = obj[key].bind(obj);
        }
      }
    }
  }

  // ../node_modules/.pnpm/@probe.gl+log@3.6.0/node_modules/@probe.gl/log/dist/esm/utils/assert.js
  function assert3(condition, message) {
    if (!condition) {
      throw new Error(message || "Assertion failed");
    }
  }

  // ../node_modules/.pnpm/@probe.gl+log@3.6.0/node_modules/@probe.gl/log/dist/esm/utils/hi-res-timestamp.js
  function getHiResTimestamp2() {
    let timestamp;
    if (isBrowser3 && "performance" in window_3) {
      var _window$performance, _window$performance$n;
      timestamp = window_3 === null || window_3 === void 0 ? void 0 : (_window$performance = window_3.performance) === null || _window$performance === void 0 ? void 0 : (_window$performance$n = _window$performance.now) === null || _window$performance$n === void 0 ? void 0 : _window$performance$n.call(_window$performance);
    } else if ("hrtime" in process_) {
      var _process$hrtime;
      const timeParts = process_ === null || process_ === void 0 ? void 0 : (_process$hrtime = process_.hrtime) === null || _process$hrtime === void 0 ? void 0 : _process$hrtime.call(process_);
      timestamp = timeParts[0] * 1e3 + timeParts[1] / 1e6;
    } else {
      timestamp = Date.now();
    }
    return timestamp;
  }

  // ../node_modules/.pnpm/@probe.gl+log@3.6.0/node_modules/@probe.gl/log/dist/esm/log.js
  var originalConsole = {
    debug: isBrowser3 ? console.debug || console.log : console.log,
    log: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  };
  var DEFAULT_SETTINGS = {
    enabled: true,
    level: 0
  };
  function noop() {
  }
  var cache = {};
  var ONCE = {
    once: true
  };
  var Log = class {
    constructor() {
      let {
        id
      } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        id: ""
      };
      _defineProperty(this, "id", void 0);
      _defineProperty(this, "VERSION", VERSION2);
      _defineProperty(this, "_startTs", getHiResTimestamp2());
      _defineProperty(this, "_deltaTs", getHiResTimestamp2());
      _defineProperty(this, "_storage", void 0);
      _defineProperty(this, "userData", {});
      _defineProperty(this, "LOG_THROTTLE_TIMEOUT", 0);
      this.id = id;
      this.userData = {};
      this._storage = new LocalStorage("__probe-".concat(this.id, "__"), DEFAULT_SETTINGS);
      this.timeStamp("".concat(this.id, " started"));
      autobind(this);
      Object.seal(this);
    }
    set level(newLevel) {
      this.setLevel(newLevel);
    }
    get level() {
      return this.getLevel();
    }
    isEnabled() {
      return this._storage.config.enabled;
    }
    getLevel() {
      return this._storage.config.level;
    }
    getTotal() {
      return Number((getHiResTimestamp2() - this._startTs).toPrecision(10));
    }
    getDelta() {
      return Number((getHiResTimestamp2() - this._deltaTs).toPrecision(10));
    }
    set priority(newPriority) {
      this.level = newPriority;
    }
    get priority() {
      return this.level;
    }
    getPriority() {
      return this.level;
    }
    enable() {
      let enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      this._storage.setConfiguration({
        enabled
      });
      return this;
    }
    setLevel(level) {
      this._storage.setConfiguration({
        level
      });
      return this;
    }
    get(setting) {
      return this._storage.config[setting];
    }
    set(setting, value) {
      this._storage.setConfiguration({
        [setting]: value
      });
    }
    settings() {
      if (console.table) {
        console.table(this._storage.config);
      } else {
        console.log(this._storage.config);
      }
    }
    assert(condition, message) {
      assert3(condition, message);
    }
    warn(message) {
      return this._getLogFunction(0, message, originalConsole.warn, arguments, ONCE);
    }
    error(message) {
      return this._getLogFunction(0, message, originalConsole.error, arguments);
    }
    deprecated(oldUsage, newUsage) {
      return this.warn("`".concat(oldUsage, "` is deprecated and will be removed in a later version. Use `").concat(newUsage, "` instead"));
    }
    removed(oldUsage, newUsage) {
      return this.error("`".concat(oldUsage, "` has been removed. Use `").concat(newUsage, "` instead"));
    }
    probe(logLevel, message) {
      return this._getLogFunction(logLevel, message, originalConsole.log, arguments, {
        time: true,
        once: true
      });
    }
    log(logLevel, message) {
      return this._getLogFunction(logLevel, message, originalConsole.debug, arguments);
    }
    info(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.info, arguments);
    }
    once(logLevel, message) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      return this._getLogFunction(logLevel, message, originalConsole.debug || originalConsole.info, arguments, ONCE);
    }
    table(logLevel, table, columns) {
      if (table) {
        return this._getLogFunction(logLevel, table, console.table || noop, columns && [columns], {
          tag: getTableHeader(table)
        });
      }
      return noop;
    }
    image(_ref) {
      let {
        logLevel,
        priority,
        image,
        message = "",
        scale = 1
      } = _ref;
      if (!this._shouldLog(logLevel || priority)) {
        return noop;
      }
      return isBrowser3 ? logImageInBrowser({
        image,
        message,
        scale
      }) : logImageInNode({
        image,
        message,
        scale
      });
    }
    time(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.time ? console.time : console.info);
    }
    timeEnd(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.timeEnd ? console.timeEnd : console.info);
    }
    timeStamp(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.timeStamp || noop);
    }
    group(logLevel, message) {
      let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        collapsed: false
      };
      const options = normalizeArguments({
        logLevel,
        message,
        opts
      });
      const {
        collapsed
      } = opts;
      options.method = (collapsed ? console.groupCollapsed : console.group) || console.info;
      return this._getLogFunction(options);
    }
    groupCollapsed(logLevel, message) {
      let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.group(logLevel, message, Object.assign({}, opts, {
        collapsed: true
      }));
    }
    groupEnd(logLevel) {
      return this._getLogFunction(logLevel, "", console.groupEnd || noop);
    }
    withGroup(logLevel, message, func) {
      this.group(logLevel, message)();
      try {
        func();
      } finally {
        this.groupEnd(logLevel)();
      }
    }
    trace() {
      if (console.trace) {
        console.trace();
      }
    }
    _shouldLog(logLevel) {
      return this.isEnabled() && this.getLevel() >= normalizeLogLevel(logLevel);
    }
    _getLogFunction(logLevel, message, method, args, opts) {
      if (this._shouldLog(logLevel)) {
        opts = normalizeArguments({
          logLevel,
          message,
          args,
          opts
        });
        method = method || opts.method;
        assert3(method);
        opts.total = this.getTotal();
        opts.delta = this.getDelta();
        this._deltaTs = getHiResTimestamp2();
        const tag = opts.tag || opts.message;
        if (opts.once) {
          if (!cache[tag]) {
            cache[tag] = getHiResTimestamp2();
          } else {
            return noop;
          }
        }
        message = decorateMessage(this.id, opts.message, opts);
        return method.bind(console, message, ...opts.args);
      }
      return noop;
    }
  };
  _defineProperty(Log, "VERSION", VERSION2);
  function normalizeLogLevel(logLevel) {
    if (!logLevel) {
      return 0;
    }
    let resolvedLevel;
    switch (typeof logLevel) {
      case "number":
        resolvedLevel = logLevel;
        break;
      case "object":
        resolvedLevel = logLevel.logLevel || logLevel.priority || 0;
        break;
      default:
        return 0;
    }
    assert3(Number.isFinite(resolvedLevel) && resolvedLevel >= 0);
    return resolvedLevel;
  }
  function normalizeArguments(opts) {
    const {
      logLevel,
      message
    } = opts;
    opts.logLevel = normalizeLogLevel(logLevel);
    const args = opts.args ? Array.from(opts.args) : [];
    while (args.length && args.shift() !== message) {
    }
    switch (typeof logLevel) {
      case "string":
      case "function":
        if (message !== void 0) {
          args.unshift(message);
        }
        opts.message = logLevel;
        break;
      case "object":
        Object.assign(opts, logLevel);
        break;
      default:
    }
    if (typeof opts.message === "function") {
      opts.message = opts.message();
    }
    const messageType = typeof opts.message;
    assert3(messageType === "string" || messageType === "object");
    return Object.assign(opts, {
      args
    }, opts.opts);
  }
  function decorateMessage(id, message, opts) {
    if (typeof message === "string") {
      const time = opts.time ? leftPad(formatTime(opts.total)) : "";
      message = opts.time ? "".concat(id, ": ").concat(time, "  ").concat(message) : "".concat(id, ": ").concat(message);
      message = addColor(message, opts.color, opts.background);
    }
    return message;
  }
  function logImageInNode(_ref2) {
    let {
      image,
      message = "",
      scale = 1
    } = _ref2;
    console.warn("removed");
    return noop;
  }
  function logImageInBrowser(_ref3) {
    let {
      image,
      message = "",
      scale = 1
    } = _ref3;
    if (typeof image === "string") {
      const img = new Image();
      img.onload = () => {
        const args = formatImage(img, message, scale);
        console.log(...args);
      };
      img.src = image;
      return noop;
    }
    const element = image.nodeName || "";
    if (element.toLowerCase() === "img") {
      console.log(...formatImage(image, message, scale));
      return noop;
    }
    if (element.toLowerCase() === "canvas") {
      const img = new Image();
      img.onload = () => console.log(...formatImage(img, message, scale));
      img.src = image.toDataURL();
      return noop;
    }
    return noop;
  }
  function getTableHeader(table) {
    for (const key in table) {
      for (const title in table[key]) {
        return title || "untitled";
      }
    }
    return "empty";
  }

  // ../node_modules/.pnpm/@probe.gl+log@3.6.0/node_modules/@probe.gl/log/dist/esm/index.js
  var esm_default = new Log({
    id: "@probe.gl/log"
  });

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/loader-utils/loggers.js
  var probeLog = new Log({
    id: "loaders.gl"
  });
  var NullLog = class {
    log() {
      return () => {
      };
    }
    info() {
      return () => {
      };
    }
    warn() {
      return () => {
      };
    }
    error() {
      return () => {
      };
    }
  };
  var ConsoleLog = class {
    constructor() {
      _defineProperty(this, "console", void 0);
      this.console = console;
    }
    log(...args) {
      return this.console.log.bind(this.console, ...args);
    }
    info(...args) {
      return this.console.info.bind(this.console, ...args);
    }
    warn(...args) {
      return this.console.warn.bind(this.console, ...args);
    }
    error(...args) {
      return this.console.error.bind(this.console, ...args);
    }
  };

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/loader-utils/option-defaults.js
  var DEFAULT_LOADER_OPTIONS = {
    fetch: null,
    mimeType: void 0,
    nothrow: false,
    log: new ConsoleLog(),
    CDN: "https://unpkg.com/@loaders.gl",
    worker: true,
    maxConcurrency: 3,
    maxMobileConcurrency: 1,
    reuseWorkers: isBrowser,
    _nodeWorkers: false,
    _workerType: "",
    limit: 0,
    _limitMB: 0,
    batchSize: "auto",
    batchDebounceMs: 0,
    metadata: false,
    transforms: []
  };
  var REMOVED_LOADER_OPTIONS = {
    throws: "nothrow",
    dataType: "(no longer used)",
    uri: "baseUri",
    method: "fetch.method",
    headers: "fetch.headers",
    body: "fetch.body",
    mode: "fetch.mode",
    credentials: "fetch.credentials",
    cache: "fetch.cache",
    redirect: "fetch.redirect",
    referrer: "fetch.referrer",
    referrerPolicy: "fetch.referrerPolicy",
    integrity: "fetch.integrity",
    keepalive: "fetch.keepalive",
    signal: "fetch.signal"
  };

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/loader-utils/option-utils.js
  function getGlobalLoaderState() {
    globalThis.loaders = globalThis.loaders || {};
    const {
      loaders
    } = globalThis;
    loaders._state = loaders._state || {};
    return loaders._state;
  }
  var getGlobalLoaderOptions = () => {
    const state = getGlobalLoaderState();
    state.globalOptions = state.globalOptions || {
      ...DEFAULT_LOADER_OPTIONS
    };
    return state.globalOptions;
  };
  function normalizeOptions(options, loader, loaders, url) {
    loaders = loaders || [];
    loaders = Array.isArray(loaders) ? loaders : [loaders];
    validateOptions(options, loaders);
    return normalizeOptionsInternal(loader, options, url);
  }
  function getFetchFunction(options, context) {
    const globalOptions = getGlobalLoaderOptions();
    const fetchOptions = options || globalOptions;
    if (typeof fetchOptions.fetch === "function") {
      return fetchOptions.fetch;
    }
    if (isObject(fetchOptions.fetch)) {
      return (url) => fetchFile(url, fetchOptions);
    }
    if (context !== null && context !== void 0 && context.fetch) {
      return context === null || context === void 0 ? void 0 : context.fetch;
    }
    return fetchFile;
  }
  function validateOptions(options, loaders) {
    validateOptionsObject(options, null, DEFAULT_LOADER_OPTIONS, REMOVED_LOADER_OPTIONS, loaders);
    for (const loader of loaders) {
      const idOptions = options && options[loader.id] || {};
      const loaderOptions = loader.options && loader.options[loader.id] || {};
      const deprecatedOptions = loader.deprecatedOptions && loader.deprecatedOptions[loader.id] || {};
      validateOptionsObject(idOptions, loader.id, loaderOptions, deprecatedOptions, loaders);
    }
  }
  function validateOptionsObject(options, id, defaultOptions, deprecatedOptions, loaders) {
    const loaderName = id || "Top level";
    const prefix = id ? "".concat(id, ".") : "";
    for (const key in options) {
      const isSubOptions = !id && isObject(options[key]);
      const isBaseUriOption = key === "baseUri" && !id;
      const isWorkerUrlOption = key === "workerUrl" && id;
      if (!(key in defaultOptions) && !isBaseUriOption && !isWorkerUrlOption) {
        if (key in deprecatedOptions) {
          probeLog.warn("".concat(loaderName, " loader option '").concat(prefix).concat(key, "' no longer supported, use '").concat(deprecatedOptions[key], "'"))();
        } else if (!isSubOptions) {
          const suggestion = findSimilarOption(key, loaders);
          probeLog.warn("".concat(loaderName, " loader option '").concat(prefix).concat(key, "' not recognized. ").concat(suggestion))();
        }
      }
    }
  }
  function findSimilarOption(optionKey, loaders) {
    const lowerCaseOptionKey = optionKey.toLowerCase();
    let bestSuggestion = "";
    for (const loader of loaders) {
      for (const key in loader.options) {
        if (optionKey === key) {
          return "Did you mean '".concat(loader.id, ".").concat(key, "'?");
        }
        const lowerCaseKey = key.toLowerCase();
        const isPartialMatch = lowerCaseOptionKey.startsWith(lowerCaseKey) || lowerCaseKey.startsWith(lowerCaseOptionKey);
        if (isPartialMatch) {
          bestSuggestion = bestSuggestion || "Did you mean '".concat(loader.id, ".").concat(key, "'?");
        }
      }
    }
    return bestSuggestion;
  }
  function normalizeOptionsInternal(loader, options, url) {
    const loaderDefaultOptions = loader.options || {};
    const mergedOptions = {
      ...loaderDefaultOptions
    };
    addUrlOptions(mergedOptions, url);
    if (mergedOptions.log === null) {
      mergedOptions.log = new NullLog();
    }
    mergeNestedFields(mergedOptions, getGlobalLoaderOptions());
    mergeNestedFields(mergedOptions, options);
    return mergedOptions;
  }
  function mergeNestedFields(mergedOptions, options) {
    for (const key in options) {
      if (key in options) {
        const value = options[key];
        if (isPureObject(value) && isPureObject(mergedOptions[key])) {
          mergedOptions[key] = {
            ...mergedOptions[key],
            ...options[key]
          };
        } else {
          mergedOptions[key] = options[key];
        }
      }
    }
  }
  function addUrlOptions(options, url) {
    if (url && !("baseUri" in options)) {
      options.baseUri = url;
    }
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/loader-utils/normalize-loader.js
  function isLoaderObject(loader) {
    var _loader;
    if (!loader) {
      return false;
    }
    if (Array.isArray(loader)) {
      loader = loader[0];
    }
    const hasExtensions = Array.isArray((_loader = loader) === null || _loader === void 0 ? void 0 : _loader.extensions);
    return hasExtensions;
  }
  function normalizeLoader(loader) {
    var _loader2, _loader3;
    assert(loader, "null loader");
    assert(isLoaderObject(loader), "invalid loader");
    let options;
    if (Array.isArray(loader)) {
      options = loader[1];
      loader = loader[0];
      loader = {
        ...loader,
        options: {
          ...loader.options,
          ...options
        }
      };
    }
    if ((_loader2 = loader) !== null && _loader2 !== void 0 && _loader2.parseTextSync || (_loader3 = loader) !== null && _loader3 !== void 0 && _loader3.parseText) {
      loader.text = true;
    }
    if (!loader.text) {
      loader.binary = true;
    }
    return loader;
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/api/register-loaders.js
  var getGlobalLoaderRegistry = () => {
    const state = getGlobalLoaderState();
    state.loaderRegistry = state.loaderRegistry || [];
    return state.loaderRegistry;
  };
  function getRegisteredLoaders() {
    return getGlobalLoaderRegistry();
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/utils/log.js
  var log = new Log({
    id: "loaders.gl"
  });

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/api/select-loader.js
  var EXT_PATTERN = /\.([^.]+)$/;
  async function selectLoader(data, loaders = [], options, context) {
    if (!validHTTPResponse(data)) {
      return null;
    }
    let loader = selectLoaderSync(data, loaders, {
      ...options,
      nothrow: true
    }, context);
    if (loader) {
      return loader;
    }
    if (isBlob(data)) {
      data = await data.slice(0, 10).arrayBuffer();
      loader = selectLoaderSync(data, loaders, options, context);
    }
    if (!loader && !(options !== null && options !== void 0 && options.nothrow)) {
      throw new Error(getNoValidLoaderMessage(data));
    }
    return loader;
  }
  function selectLoaderSync(data, loaders = [], options, context) {
    if (!validHTTPResponse(data)) {
      return null;
    }
    if (loaders && !Array.isArray(loaders)) {
      return normalizeLoader(loaders);
    }
    let candidateLoaders = [];
    if (loaders) {
      candidateLoaders = candidateLoaders.concat(loaders);
    }
    if (!(options !== null && options !== void 0 && options.ignoreRegisteredLoaders)) {
      candidateLoaders.push(...getRegisteredLoaders());
    }
    normalizeLoaders(candidateLoaders);
    const loader = selectLoaderInternal(data, candidateLoaders, options, context);
    if (!loader && !(options !== null && options !== void 0 && options.nothrow)) {
      throw new Error(getNoValidLoaderMessage(data));
    }
    return loader;
  }
  function selectLoaderInternal(data, loaders, options, context) {
    const {
      url,
      type
    } = getResourceUrlAndType(data);
    const testUrl = url || (context === null || context === void 0 ? void 0 : context.url);
    let loader = null;
    let reason = "";
    if (options !== null && options !== void 0 && options.mimeType) {
      loader = findLoaderByMIMEType(loaders, options === null || options === void 0 ? void 0 : options.mimeType);
      reason = "match forced by supplied MIME type ".concat(options === null || options === void 0 ? void 0 : options.mimeType);
    }
    loader = loader || findLoaderByUrl(loaders, testUrl);
    reason = reason || (loader ? "matched url ".concat(testUrl) : "");
    loader = loader || findLoaderByMIMEType(loaders, type);
    reason = reason || (loader ? "matched MIME type ".concat(type) : "");
    loader = loader || findLoaderByInitialBytes(loaders, data);
    reason = reason || (loader ? "matched initial data ".concat(getFirstCharacters(data)) : "");
    loader = loader || findLoaderByMIMEType(loaders, options === null || options === void 0 ? void 0 : options.fallbackMimeType);
    reason = reason || (loader ? "matched fallback MIME type ".concat(type) : "");
    if (reason) {
      var _loader;
      log.log(1, "selectLoader selected ".concat((_loader = loader) === null || _loader === void 0 ? void 0 : _loader.name, ": ").concat(reason, "."));
    }
    return loader;
  }
  function validHTTPResponse(data) {
    if (data instanceof Response) {
      if (data.status === 204) {
        return false;
      }
    }
    return true;
  }
  function getNoValidLoaderMessage(data) {
    const {
      url,
      type
    } = getResourceUrlAndType(data);
    let message = "No valid loader found (";
    message += url ? "".concat(path_exports.filename(url), ", ") : "no url provided, ";
    message += "MIME type: ".concat(type ? '"'.concat(type, '"') : "not provided", ", ");
    const firstCharacters = data ? getFirstCharacters(data) : "";
    message += firstCharacters ? ' first bytes: "'.concat(firstCharacters, '"') : "first bytes: not available";
    message += ")";
    return message;
  }
  function normalizeLoaders(loaders) {
    for (const loader of loaders) {
      normalizeLoader(loader);
    }
  }
  function findLoaderByUrl(loaders, url) {
    const match = url && EXT_PATTERN.exec(url);
    const extension = match && match[1];
    return extension ? findLoaderByExtension(loaders, extension) : null;
  }
  function findLoaderByExtension(loaders, extension) {
    extension = extension.toLowerCase();
    for (const loader of loaders) {
      for (const loaderExtension of loader.extensions) {
        if (loaderExtension.toLowerCase() === extension) {
          return loader;
        }
      }
    }
    return null;
  }
  function findLoaderByMIMEType(loaders, mimeType) {
    for (const loader of loaders) {
      if (loader.mimeTypes && loader.mimeTypes.includes(mimeType)) {
        return loader;
      }
      if (mimeType === "application/x.".concat(loader.id)) {
        return loader;
      }
    }
    return null;
  }
  function findLoaderByInitialBytes(loaders, data) {
    if (!data) {
      return null;
    }
    for (const loader of loaders) {
      if (typeof data === "string") {
        if (testDataAgainstText(data, loader)) {
          return loader;
        }
      } else if (ArrayBuffer.isView(data)) {
        if (testDataAgainstBinary(data.buffer, data.byteOffset, loader)) {
          return loader;
        }
      } else if (data instanceof ArrayBuffer) {
        const byteOffset = 0;
        if (testDataAgainstBinary(data, byteOffset, loader)) {
          return loader;
        }
      }
    }
    return null;
  }
  function testDataAgainstText(data, loader) {
    if (loader.testText) {
      return loader.testText(data);
    }
    const tests = Array.isArray(loader.tests) ? loader.tests : [loader.tests];
    return tests.some((test) => data.startsWith(test));
  }
  function testDataAgainstBinary(data, byteOffset, loader) {
    const tests = Array.isArray(loader.tests) ? loader.tests : [loader.tests];
    return tests.some((test) => testBinary(data, byteOffset, loader, test));
  }
  function testBinary(data, byteOffset, loader, test) {
    if (test instanceof ArrayBuffer) {
      return compareArrayBuffers(test, data, test.byteLength);
    }
    switch (typeof test) {
      case "function":
        return test(data, loader);
      case "string":
        const magic = getMagicString(data, byteOffset, test.length);
        return test === magic;
      default:
        return false;
    }
  }
  function getFirstCharacters(data, length = 5) {
    if (typeof data === "string") {
      return data.slice(0, length);
    } else if (ArrayBuffer.isView(data)) {
      return getMagicString(data.buffer, data.byteOffset, length);
    } else if (data instanceof ArrayBuffer) {
      const byteOffset = 0;
      return getMagicString(data, byteOffset, length);
    }
    return "";
  }
  function getMagicString(arrayBuffer, byteOffset, length) {
    if (arrayBuffer.byteLength < byteOffset + length) {
      return "";
    }
    const dataView = new DataView(arrayBuffer);
    let magic = "";
    for (let i = 0; i < length; i++) {
      magic += String.fromCharCode(dataView.getUint8(byteOffset + i));
    }
    return magic;
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/iterators/make-iterator/make-string-iterator.js
  var DEFAULT_CHUNK_SIZE = 256 * 1024;
  function* makeStringIterator(string, options) {
    const chunkSize = (options === null || options === void 0 ? void 0 : options.chunkSize) || DEFAULT_CHUNK_SIZE;
    let offset = 0;
    const textEncoder = new TextEncoder();
    while (offset < string.length) {
      const chunkLength = Math.min(string.length - offset, chunkSize);
      const chunk2 = string.slice(offset, offset + chunkLength);
      offset += chunkLength;
      yield textEncoder.encode(chunk2);
    }
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/iterators/make-iterator/make-array-buffer-iterator.js
  var DEFAULT_CHUNK_SIZE2 = 256 * 1024;
  function* makeArrayBufferIterator(arrayBuffer, options = {}) {
    const {
      chunkSize = DEFAULT_CHUNK_SIZE2
    } = options;
    let byteOffset = 0;
    while (byteOffset < arrayBuffer.byteLength) {
      const chunkByteLength = Math.min(arrayBuffer.byteLength - byteOffset, chunkSize);
      const chunk2 = new ArrayBuffer(chunkByteLength);
      const sourceArray = new Uint8Array(arrayBuffer, byteOffset, chunkByteLength);
      const chunkArray = new Uint8Array(chunk2);
      chunkArray.set(sourceArray);
      byteOffset += chunkByteLength;
      yield chunk2;
    }
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/iterators/make-iterator/make-blob-iterator.js
  var DEFAULT_CHUNK_SIZE3 = 1024 * 1024;
  async function* makeBlobIterator(blob, options) {
    const chunkSize = (options === null || options === void 0 ? void 0 : options.chunkSize) || DEFAULT_CHUNK_SIZE3;
    let offset = 0;
    while (offset < blob.size) {
      const end = offset + chunkSize;
      const chunk2 = await blob.slice(offset, end).arrayBuffer();
      offset = end;
      yield chunk2;
    }
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/iterators/make-iterator/make-stream-iterator.js
  function makeStreamIterator(stream, options) {
    return isBrowser ? makeBrowserStreamIterator(stream, options) : makeNodeStreamIterator(stream, options);
  }
  async function* makeBrowserStreamIterator(stream, options) {
    const reader = stream.getReader();
    let nextBatchPromise;
    try {
      while (true) {
        const currentBatchPromise = nextBatchPromise || reader.read();
        if (options !== null && options !== void 0 && options._streamReadAhead) {
          nextBatchPromise = reader.read();
        }
        const {
          done,
          value
        } = await currentBatchPromise;
        if (done) {
          return;
        }
        yield toArrayBuffer(value);
      }
    } catch (error) {
      reader.releaseLock();
    }
  }
  async function* makeNodeStreamIterator(stream, options) {
    for await (const chunk2 of stream) {
      yield toArrayBuffer(chunk2);
    }
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/iterators/make-iterator/make-iterator.js
  function makeIterator(data, options) {
    if (typeof data === "string") {
      return makeStringIterator(data, options);
    }
    if (data instanceof ArrayBuffer) {
      return makeArrayBufferIterator(data, options);
    }
    if (isBlob(data)) {
      return makeBlobIterator(data, options);
    }
    if (isReadableStream(data)) {
      return makeStreamIterator(data, options);
    }
    if (isResponse(data)) {
      const response = data;
      return makeStreamIterator(response.body, options);
    }
    throw new Error("makeIterator");
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/loader-utils/get-data.js
  var ERR_DATA = "Cannot convert supplied data type";
  function getArrayBufferOrStringFromDataSync(data, loader, options) {
    if (loader.text && typeof data === "string") {
      return data;
    }
    if (isBuffer2(data)) {
      data = data.buffer;
    }
    if (data instanceof ArrayBuffer) {
      const arrayBuffer = data;
      if (loader.text && !loader.binary) {
        const textDecoder = new TextDecoder("utf8");
        return textDecoder.decode(arrayBuffer);
      }
      return arrayBuffer;
    }
    if (ArrayBuffer.isView(data)) {
      if (loader.text && !loader.binary) {
        const textDecoder = new TextDecoder("utf8");
        return textDecoder.decode(data);
      }
      let arrayBuffer = data.buffer;
      const byteLength = data.byteLength || data.length;
      if (data.byteOffset !== 0 || byteLength !== arrayBuffer.byteLength) {
        arrayBuffer = arrayBuffer.slice(data.byteOffset, data.byteOffset + byteLength);
      }
      return arrayBuffer;
    }
    throw new Error(ERR_DATA);
  }
  async function getArrayBufferOrStringFromData(data, loader, options) {
    const isArrayBuffer = data instanceof ArrayBuffer || ArrayBuffer.isView(data);
    if (typeof data === "string" || isArrayBuffer) {
      return getArrayBufferOrStringFromDataSync(data, loader, options);
    }
    if (isBlob(data)) {
      data = await makeResponse(data);
    }
    if (isResponse(data)) {
      const response = data;
      await checkResponse(response);
      return loader.binary ? await response.arrayBuffer() : await response.text();
    }
    if (isReadableStream(data)) {
      data = makeIterator(data, options);
    }
    if (isIterable(data) || isAsyncIterable(data)) {
      return concatenateArrayBuffersAsync(data);
    }
    throw new Error(ERR_DATA);
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/loader-utils/loader-context.js
  function getLoaderContext(context, options, previousContext = null) {
    if (previousContext) {
      return previousContext;
    }
    const resolvedContext = {
      fetch: getFetchFunction(options, context),
      ...context
    };
    if (!Array.isArray(resolvedContext.loaders)) {
      resolvedContext.loaders = null;
    }
    return resolvedContext;
  }
  function getLoadersFromContext(loaders, context) {
    if (!context && loaders && !Array.isArray(loaders)) {
      return loaders;
    }
    let candidateLoaders;
    if (loaders) {
      candidateLoaders = Array.isArray(loaders) ? loaders : [loaders];
    }
    if (context && context.loaders) {
      const contextLoaders = Array.isArray(context.loaders) ? context.loaders : [context.loaders];
      candidateLoaders = candidateLoaders ? [...candidateLoaders, ...contextLoaders] : contextLoaders;
    }
    return candidateLoaders && candidateLoaders.length ? candidateLoaders : null;
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/api/parse.js
  async function parse(data, loaders, options, context) {
    assert2(!context || typeof context === "object");
    if (loaders && !Array.isArray(loaders) && !isLoaderObject(loaders)) {
      context = void 0;
      options = loaders;
      loaders = void 0;
    }
    data = await data;
    options = options || {};
    const {
      url
    } = getResourceUrlAndType(data);
    const typedLoaders = loaders;
    const candidateLoaders = getLoadersFromContext(typedLoaders, context);
    const loader = await selectLoader(data, candidateLoaders, options);
    if (!loader) {
      return null;
    }
    options = normalizeOptions(options, loader, candidateLoaders, url);
    context = getLoaderContext({
      url,
      parse,
      loaders: candidateLoaders
    }, options, context);
    return await parseWithLoader(loader, data, options, context);
  }
  async function parseWithLoader(loader, data, options, context) {
    validateWorkerVersion(loader);
    if (isResponse(data)) {
      const response = data;
      const {
        ok,
        redirected,
        status,
        statusText,
        type,
        url
      } = response;
      const headers = Object.fromEntries(response.headers.entries());
      context.response = {
        headers,
        ok,
        redirected,
        status,
        statusText,
        type,
        url
      };
    }
    data = await getArrayBufferOrStringFromData(data, loader, options);
    if (loader.parseTextSync && typeof data === "string") {
      options.dataType = "text";
      return loader.parseTextSync(data, options, context, loader);
    }
    if (canParseWithWorker(loader, options)) {
      return await parseWithWorker(loader, data, options, context, parse);
    }
    if (loader.parseText && typeof data === "string") {
      return await loader.parseText(data, options, context, loader);
    }
    if (loader.parse) {
      return await loader.parse(data, options, context, loader);
    }
    assert2(!loader.parseSync);
    throw new Error("".concat(loader.id, " loader - no parser found and worker is disabled"));
  }

  // ../node_modules/.pnpm/@loaders.gl+core@3.2.13/node_modules/@loaders.gl/core/dist/esm/lib/api/load.js
  async function load(url, loaders, options, context) {
    if (!Array.isArray(loaders) && !isLoaderObject(loaders)) {
      context = void 0;
      options = loaders;
      loaders = void 0;
    }
    const fetch2 = getFetchFunction(options);
    let data = url;
    if (typeof url === "string") {
      data = await fetch2(url);
    }
    if (isBlob(url)) {
      data = await fetch2(url);
    }
    return await parse(data, loaders, options);
  }

  // src/workers/worker-class.ts
  var DataWorker = class extends DextraWorker {
    constructor() {
      super();
      this.data = {};
      this.data = {};
      console.log("data worker initialized");
    }
    loadData(dataSchema) {
      return __async(this, null, function* () {
        if (this.data[dataSchema.url]) {
          return this.data[dataSchema.url];
        }
        switch (dataSchema.type) {
          case "csv":
            const loaders = yield Promise.resolve().then(() => (init_esm2(), esm_exports));
            const response = yield load(dataSchema.url, loaders.CSVLoader, { csv: { dynamicTyping: true, header: true } });
            const length = response.length;
            const columns = Object.keys(response[0]);
            const data = columns.reduce((acc, cur, i) => {
              acc[i] = new Array(length);
              return acc;
            }, new Array(columns.length));
            for (let j = 0; j < columns.length; j++) {
              const col = columns[j];
              for (let i = 0; i < length; i++) {
                data[j][i] = response[i][col];
              }
            }
            this.data[dataSchema.url] = {
              data,
              columns
            };
            return true;
          default:
            return null;
        }
      });
    }
    runAnalysis(dataSchema, columnSchema, analysisSchema) {
      return __async(this, null, function* () {
        const ss = yield Promise.resolve().then(() => (init_simple_statistics(), simple_statistics_exports));
        const { data, columns } = this.data[dataSchema.url];
        const columnIndex = columns.indexOf(columnSchema.column);
        const columnData = data[columnIndex];
        this.emit();
        return ss[analysisSchema.type](columnData);
      });
    }
    getTable(dataSchema) {
      return this.data[dataSchema.url];
    }
    emit() {
      const updateEvent = new Event("data-filter-update");
      self.dispatchEvent(updateEvent);
    }
  };

  // ../node_modules/.pnpm/comlink@4.3.1/node_modules/comlink/dist/esm/comlink.mjs
  var proxyMarker = Symbol("Comlink.proxy");
  var createEndpoint = Symbol("Comlink.endpoint");
  var releaseProxy = Symbol("Comlink.releaseProxy");
  var throwMarker = Symbol("Comlink.thrown");
  var isObject2 = (val) => typeof val === "object" && val !== null || typeof val === "function";
  var proxyTransferHandler = {
    canHandle: (val) => isObject2(val) && val[proxyMarker],
    serialize(obj) {
      const { port1, port2 } = new MessageChannel();
      expose(obj, port1);
      return [port2, [port2]];
    },
    deserialize(port) {
      port.start();
      return wrap(port);
    }
  };
  var throwTransferHandler = {
    canHandle: (value) => isObject2(value) && throwMarker in value,
    serialize({ value }) {
      let serialized;
      if (value instanceof Error) {
        serialized = {
          isError: true,
          value: {
            message: value.message,
            name: value.name,
            stack: value.stack
          }
        };
      } else {
        serialized = { isError: false, value };
      }
      return [serialized, []];
    },
    deserialize(serialized) {
      if (serialized.isError) {
        throw Object.assign(new Error(serialized.value.message), serialized.value);
      }
      throw serialized.value;
    }
  };
  var transferHandlers = /* @__PURE__ */ new Map([
    ["proxy", proxyTransferHandler],
    ["throw", throwTransferHandler]
  ]);
  function expose(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
      if (!ev || !ev.data) {
        return;
      }
      const { id, type, path } = Object.assign({ path: [] }, ev.data);
      const argumentList = (ev.data.argumentList || []).map(fromWireValue);
      let returnValue;
      try {
        const parent = path.slice(0, -1).reduce((obj2, prop) => obj2[prop], obj);
        const rawValue = path.reduce((obj2, prop) => obj2[prop], obj);
        switch (type) {
          case "GET":
            {
              returnValue = rawValue;
            }
            break;
          case "SET":
            {
              parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
              returnValue = true;
            }
            break;
          case "APPLY":
            {
              returnValue = rawValue.apply(parent, argumentList);
            }
            break;
          case "CONSTRUCT":
            {
              const value = new rawValue(...argumentList);
              returnValue = proxy(value);
            }
            break;
          case "ENDPOINT":
            {
              const { port1, port2 } = new MessageChannel();
              expose(obj, port2);
              returnValue = transfer(port1, [port1]);
            }
            break;
          case "RELEASE":
            {
              returnValue = void 0;
            }
            break;
          default:
            return;
        }
      } catch (value) {
        returnValue = { value, [throwMarker]: 0 };
      }
      Promise.resolve(returnValue).catch((value) => {
        return { value, [throwMarker]: 0 };
      }).then((returnValue2) => {
        const [wireValue, transferables] = toWireValue(returnValue2);
        ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
        if (type === "RELEASE") {
          ep.removeEventListener("message", callback);
          closeEndPoint(ep);
        }
      });
    });
    if (ep.start) {
      ep.start();
    }
  }
  function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
  }
  function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint))
      endpoint.close();
  }
  function wrap(ep, target) {
    return createProxy(ep, [], target);
  }
  function throwIfProxyReleased(isReleased) {
    if (isReleased) {
      throw new Error("Proxy has been released and is not useable");
    }
  }
  function createProxy(ep, path = [], target = function() {
  }) {
    let isProxyReleased = false;
    const proxy2 = new Proxy(target, {
      get(_target, prop) {
        throwIfProxyReleased(isProxyReleased);
        if (prop === releaseProxy) {
          return () => {
            return requestResponseMessage(ep, {
              type: "RELEASE",
              path: path.map((p) => p.toString())
            }).then(() => {
              closeEndPoint(ep);
              isProxyReleased = true;
            });
          };
        }
        if (prop === "then") {
          if (path.length === 0) {
            return { then: () => proxy2 };
          }
          const r = requestResponseMessage(ep, {
            type: "GET",
            path: path.map((p) => p.toString())
          }).then(fromWireValue);
          return r.then.bind(r);
        }
        return createProxy(ep, [...path, prop]);
      },
      set(_target, prop, rawValue) {
        throwIfProxyReleased(isProxyReleased);
        const [value, transferables] = toWireValue(rawValue);
        return requestResponseMessage(ep, {
          type: "SET",
          path: [...path, prop].map((p) => p.toString()),
          value
        }, transferables).then(fromWireValue);
      },
      apply(_target, _thisArg, rawArgumentList) {
        throwIfProxyReleased(isProxyReleased);
        const last = path[path.length - 1];
        if (last === createEndpoint) {
          return requestResponseMessage(ep, {
            type: "ENDPOINT"
          }).then(fromWireValue);
        }
        if (last === "bind") {
          return createProxy(ep, path.slice(0, -1));
        }
        const [argumentList, transferables] = processArguments(rawArgumentList);
        return requestResponseMessage(ep, {
          type: "APPLY",
          path: path.map((p) => p.toString()),
          argumentList
        }, transferables).then(fromWireValue);
      },
      construct(_target, rawArgumentList) {
        throwIfProxyReleased(isProxyReleased);
        const [argumentList, transferables] = processArguments(rawArgumentList);
        return requestResponseMessage(ep, {
          type: "CONSTRUCT",
          path: path.map((p) => p.toString()),
          argumentList
        }, transferables).then(fromWireValue);
      }
    });
    return proxy2;
  }
  function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
  }
  function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
  }
  var transferCache = /* @__PURE__ */ new WeakMap();
  function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
  }
  function proxy(obj) {
    return Object.assign(obj, { [proxyMarker]: true });
  }
  function toWireValue(value) {
    for (const [name, handler] of transferHandlers) {
      if (handler.canHandle(value)) {
        const [serializedValue, transferables] = handler.serialize(value);
        return [
          {
            type: "HANDLER",
            name,
            value: serializedValue
          },
          transferables
        ];
      }
    }
    return [
      {
        type: "RAW",
        value
      },
      transferCache.get(value) || []
    ];
  }
  function fromWireValue(value) {
    switch (value.type) {
      case "HANDLER":
        return transferHandlers.get(value.name).deserialize(value.value);
      case "RAW":
        return value.value;
    }
  }
  function requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve) => {
      const id = generateUUID();
      ep.addEventListener("message", function l(ev) {
        if (!ev.data || !ev.data.id || ev.data.id !== id) {
          return;
        }
        ep.removeEventListener("message", l);
        resolve(ev.data);
      });
      if (ep.start) {
        ep.start();
      }
      ep.postMessage(Object.assign({ id }, msg), transfers);
    });
  }
  function generateUUID() {
    return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
  }

  // src/workers/dextra-worker.ts
  var AnalysisWorker = new DataWorker();
  onconnect = (e) => expose(AnalysisWorker, e.ports[0]);
})();
/*! Bundled license information:

@loaders.gl/csv/dist/esm/papaparse/papaparse.js:
  (* @license
  Papa Parse
  v5.0.0-beta.0
  https://github.com/mholt/PapaParse
  License: MIT
  *)
*/
