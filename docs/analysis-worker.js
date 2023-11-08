"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // ../node_modules/simple-statistics/dist/simple-statistics.mjs
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
    var copy = x.slice();
    if (Array.isArray(p)) {
      multiQuantileSelect(copy, p);
      var results = [];
      for (var i = 0; i < p.length; i++) {
        results[i] = quantileSorted(copy, p[i]);
      }
      return results;
    } else {
      var idx = quantileIndex(copy.length, p);
      quantileSelect(copy, idx, 0, copy.length - 1);
      return quantileSorted(copy, p);
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
  var BayesianClassifier = function BayesianClassifier2() {
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
  var PerceptronModel = function PerceptronModel2() {
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
  var epsilon = 1e-4;
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
  var COEFFICIENTS = [
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
  var g = 607 / 128;
  var LOGSQRT2PI = Math.log(Math.sqrt(2 * Math.PI));
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
  var chiSquaredDistributionTable = {
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
  var SQRT_2PI$1 = Math.sqrt(2 * Math.PI);
  var kernels = {
    /**
     * The gaussian kernel.
     * @private
     */
    gaussian: function(u) {
      return Math.exp(-0.5 * u * u) / SQRT_2PI$1;
    }
  };
  var bandwidthMethods = {
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
  var SQRT_2PI = Math.sqrt(2 * Math.PI);
  function cumulativeDistribution(z) {
    var sum2 = z, tmp = z;
    for (var i = 1; i < 15; i++) {
      tmp *= z * z / (2 * i + 1);
      sum2 += tmp;
    }
    return Math.round((0.5 + sum2 / SQRT_2PI * Math.exp(-z * z / 2)) * 1e4) / 1e4;
  }
  var standardNormalTable = [];
  for (z = 0; z <= 3.09; z += 0.01) {
    standardNormalTable.push(cumulativeDistribution(z));
  }
  var z;
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

  // src/schemas/analysis.ts
  var AnalysisClass = class {
  };
  var Analysis = class extends AnalysisClass {
    runAnalysis(data, dataSchema, columnSchema, analysisSchema) {
      console.log("running analysis...");
      const accessor = (row) => {
        var _a;
        return (_a = data == null ? void 0 : data[row]) == null ? void 0 : _a[columnSchema.column];
      };
      const columnData = [];
      for (let i = 0; i < data.length; i++) {
        columnData.push(accessor(i));
      }
      return simple_statistics_exports[analysisSchema.type](columnData);
    }
  };

  // ../node_modules/comlink/dist/esm/comlink.mjs
  var proxyMarker = Symbol("Comlink.proxy");
  var createEndpoint = Symbol("Comlink.endpoint");
  var releaseProxy = Symbol("Comlink.releaseProxy");
  var finalizer = Symbol("Comlink.finalizer");
  var throwMarker = Symbol("Comlink.thrown");
  var isObject = (val) => typeof val === "object" && val !== null || typeof val === "function";
  var proxyTransferHandler = {
    canHandle: (val) => isObject(val) && val[proxyMarker],
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
    canHandle: (value) => isObject(value) && throwMarker in value,
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
  function isAllowedOrigin(allowedOrigins, origin) {
    for (const allowedOrigin of allowedOrigins) {
      if (origin === allowedOrigin || allowedOrigin === "*") {
        return true;
      }
      if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
        return true;
      }
    }
    return false;
  }
  function expose(obj, ep = globalThis, allowedOrigins = ["*"]) {
    ep.addEventListener("message", function callback(ev) {
      if (!ev || !ev.data) {
        return;
      }
      if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
        console.warn(`Invalid origin '${ev.origin}' for comlink proxy`);
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
          if (finalizer in obj && typeof obj[finalizer] === "function") {
            obj[finalizer]();
          }
        }
      }).catch((error) => {
        const [wireValue, transferables] = toWireValue({
          value: new TypeError("Unserializable return value"),
          [throwMarker]: 0
        });
        ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
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
  function releaseEndpoint(ep) {
    return requestResponseMessage(ep, {
      type: "RELEASE"
    }).then(() => {
      closeEndPoint(ep);
    });
  }
  var proxyCounter = /* @__PURE__ */ new WeakMap();
  var proxyFinalizers = "FinalizationRegistry" in globalThis && new FinalizationRegistry((ep) => {
    const newCount = (proxyCounter.get(ep) || 0) - 1;
    proxyCounter.set(ep, newCount);
    if (newCount === 0) {
      releaseEndpoint(ep);
    }
  });
  function registerProxy(proxy2, ep) {
    const newCount = (proxyCounter.get(ep) || 0) + 1;
    proxyCounter.set(ep, newCount);
    if (proxyFinalizers) {
      proxyFinalizers.register(proxy2, ep, proxy2);
    }
  }
  function unregisterProxy(proxy2) {
    if (proxyFinalizers) {
      proxyFinalizers.unregister(proxy2);
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
            unregisterProxy(proxy2);
            releaseEndpoint(ep);
            isProxyReleased = true;
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
    registerProxy(proxy2, ep);
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

  // src/workers/analysis-worker.ts
  var AnalysisWorker = new Analysis();
  onconnect = (e) => expose(AnalysisWorker, e.ports[0]);
})();
/*! Bundled license information:

comlink/dist/esm/comlink.mjs:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
