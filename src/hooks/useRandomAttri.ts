import { MathUtils } from 'three';

/* Each Particles Attributes Data */
function useRandomAttri(pos_range: number, rot_range: number) {
  const attribute = {
    pos: {
      x: MathUtils.randInt(-pos_range, pos_range),
      y: MathUtils.randInt(-pos_range, pos_range),
      z: MathUtils.randInt(-pos_range, pos_range),
    },
    xRot: MathUtils.randFloat(0.005, rot_range),
    yRot: MathUtils.randFloat(0.005, rot_range),
  };

  return attribute;
}

export default useRandomAttri;
