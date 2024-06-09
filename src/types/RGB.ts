type RGB = [number, number, number];

type Colors = {
    hairColor: RGB;
    hairColors: Map<string, RGB>;
    makeupColors: Map<string, RGB>;
};

export type { Colors, RGB };
