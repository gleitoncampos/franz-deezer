module.exports = Franz => class Deezer extends Franz {
  overrideUserAgent() {
    const useragent = window.navigator.userAgent;
    const parts = useragent.split('(KHTML, like Gecko)');

    return parts.join('(KHTML, like Gecko) deezer/0.0.250').replace('Electron', 'Deezer').replace('Franz', 'Deezer');
  }
};
