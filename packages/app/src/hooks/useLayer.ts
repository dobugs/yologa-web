import { useRecoilState } from 'recoil';
import { layerState } from 'stores/ui';
import { ILayerState } from 'types/ui';

const bgOverflow = (value: 'auto' | 'hidden') => {
  const nodes = window.document.querySelectorAll('html, body');
  nodes.forEach(n => ((n as HTMLElement).style.overflow = 'hidden'));
};

function useAlert() {
  const [layers, setLayer] = useRecoilState(layerState);

  const add = (data: ILayerState) => setLayer(prev => [...prev, data]);
  const remove = () => setLayer(prev => prev.slice(0, -1));

  // useEffect(() => {
  //   if (layers.length > 0) {
  //     bgOverflow('hidden');
  //   } else {
  //     bgOverflow('auto');
  //   }
  // }, [layers.length]);

  return {
    layers,
    add,
    remove,
  };
}

export default useAlert;
