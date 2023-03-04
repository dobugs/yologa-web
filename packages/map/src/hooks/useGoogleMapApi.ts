function useGoogleMapApi(api: typeof google, initialOptions?: google.maps.MapOptions) {
  const createMap = (el: HTMLDivElement) => {
    return new api.maps.Map(el, initialOptions);
  };

  return {
    createMap,
  };
}

export default useGoogleMapApi;
