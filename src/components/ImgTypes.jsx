export const ImgTypes = (types) => {
  return types.Types[1] ? (
    <>
      <img
        title={types.Types[0]}
        src={`/public/pokemon_types/Pokemon_Type_Icon_${types.Types[0]}.svg`}
        alt={types.Types[0]}
      />

      <img
        title={types.Types[1]}
        src={`/public/pokemon_types/Pokemon_Type_Icon_${types.Types[1]}.svg`}
        alt={types.Types[1]}
      />
    </>
  ) : (
    <img
      title={types.Types[0]}
      src={`/public/pokemon_types/Pokemon_Type_Icon_${types.Types[0]}.svg`}
      alt={types.Types[0]}
    />
  );
};
