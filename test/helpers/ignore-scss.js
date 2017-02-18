function ignoreScss() {
  return null;
}

require.extensions['.scss'] = ignoreScss;
