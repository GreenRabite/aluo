// NOTE:
// If you edit this file, please make sure to extensively QA our application!

// All colors should map to our Figma, which is the source of truth.
// https://www.figma.com/file/bO6k7BWONhVqWMeI1Woqa1/%F0%9F%8C%BF-Tokens

const blue = {
  /**
   * @description
   * Accepted shades of `blue`.
   * See [Trellis' color documentation](https://lattice.latticehq.com/playground/foundations/colors) for the full list of accepted color values.
   */
  "50": "#E7F4FD",
  "100": "#D2E4fA",
  "200": "#a1cbf6",
  "300": "#70B1EB",
  "400": "#4497d3",
  "500": "#3673CE",
  "600": "#0057AD",
  "700": "#00468c",
  "800": "#002F61",
  "900": "#001b3d",
} as const;

const indigo = {
  /**
   * @description
   * Accepted shades of `indigo`.
   * See [Trellis' color documentation](https://lattice.latticehq.com/playground/foundations/colors) for the full list of accepted color values.
   */
  "50": "#F0F0FC",
  "100": "#e0e0ff",
  "200": "#C1C1FF",
  "300": "#A3A4F0",
  "400": "#8586eb",
  "500": "#6A6DD0",
  "600": "#593DBA",
  "700": "#493695",
  "800": "#2E266E",
  "900": "#1a1444",
} as const;

const red = {
  /**
   * @description
   * Accepted shades of `red`.
   * See [Trellis' color documentation](https://lattice.latticehq.com/playground/foundations/colors) for the full list of accepted color values.
   */
  "50": "#FDEDED",
  "100": "#fbdbdb",
  "200": "#f8b6b3",
  "300": "#F68E88",
  "400": "#ED6058",
  "500": "#D14242",
  "600": "#A32E34",
  "700": "#8a192b",
  "800": "#5B151F",
  "900": "#3c060e",
} as const;

const yellow = {
  /**
   * @description
   * Accepted shades of `yellow`.
   * See [Trellis' color documentation](https://lattice.latticehq.com/playground/foundations/colors) for the full list of accepted color values.
   * @todo Rename to `gold` to match Figma library.
   */
  "50": "#FAF1CE",
  "100": "#ffdcbc",
  "200": "#f3be5b",
  "300": "#E3A03B",
  "400": "#D27C00",
  "500": "#BB5E16",
  "600": "#994500",
  "700": "#753400",
  "800": "#522200",
  "900": "#321200",
} as const;

const green = {
  /**
   * @description
   * Accepted shades of `green`.
   * See [Trellis' color documentation](https://lattice.latticehq.com/playground/foundations/colors) for the full list of accepted color values.
   */
  "50": "#E8F7F3",
  "100": "#b8ede0",
  "200": "#83d5c5",
  "300": "#27BFA9",
  "400": "#12a38d",
  "500": "#148574",
  "600": "#046764",
  "700": "#044f52",
  "800": "#023B3B",
  "900": "#012021",
} as const;

const gray = {
  /**
   * @description
   * Accepted shades of `gray`.
   * See [Trellis' color documentation](https://lattice.latticehq.com/playground/foundations/colors) for the full list of accepted color values.
   */
  "25": "#F7F8FA",
  "50": "#F0F2F6",
  "100": "#DEE1EA",
  "200": "#BFC7D9",
  "300": "#A2AEC8",
  "400": "#8593B6",
  "500": "#65759F",
  "600": "#50587E",
  "700": "#3f4565",
  "800": "#2A2E45",
  "900": "#141434",
} as const;

const darkOverlay = {
  "300": "rgba(20, 20, 52, 0.3)",
  "600": "rgba(20, 20, 52, 0.6)",
  "800": "rgba(20, 20, 52, 0.8)",
} as const;

const lightOverlay = {
  "300": "rgba(255, 255, 255, 0.3)",
  "600": "rgba(255, 255, 255, 0.6)",
  "800": "rgba(255, 255, 255, 0.8)",
} as const;

const white = {
  white: "#FFFFFF",

  /**
   * @deprecated
   * Consider `lightOverlay.600`.
   * See [Trellis' color documentation](https://lattice.latticehq.com/playground/foundations/colors) for the full list of accepted color values.
   */
  white52: "rgba(255, 255, 255, 0.52)",

  /**
   * @deprecated
   * Consider `lightOverlay.300`.
   * See [Trellis' color documentation](https://lattice.latticehq.com/playground/foundations/colors) for the full list of accepted color values.
   */
  white32: "rgba(255, 255, 255, 0.32)",
} as const;

/**
 * @todo Move background, border, and glyph values to `tokens` object.
 */
export const semantic = {
  attention: {
    ...yellow,
    background: yellow[50],
    border: yellow[300],
    glyph: yellow[500],
  },
  warning: {
    ...red,
    background: red[50],
    border: red[300],
    glyph: red[500],
  },
  info: {
    ...blue,
    background: blue[50],
    border: blue[300],
    glyph: blue[500],
  },
  neutral: {
    ...gray,
    background: gray[50],
    border: gray[200],
    glyph: gray[500],
  },
  success: {
    ...green,
    background: green[50],
    border: green[300],
    glyph: green[500],
  },
  accent: {
    ...indigo,
    background: indigo[50],
    border: indigo[300],
    glyph: indigo[500],
  },
} as const;

/**
 * @description
 * These color tokens are designed to provide consistent values for common UI elements and should
 * align with the color tokens in our [Figma library](https://www.figma.com/file/GkgpXmPprgAHoZf8AN2wVL/Foundations?node-id=2197%3A20702).
 */
const tokens = {
  background: {
    accent: semantic.accent[50],
    attention: semantic.attention[50],
    dark: semantic.neutral[900],
    disabled: semantic.neutral[50],
    info: semantic.info[50],
    offset: semantic.neutral[50],
    success: semantic.success[50],
    warning: semantic.warning[50],
    overlay: darkOverlay[600],
  },
  borders: {
    accent: semantic.accent[300],
    attention: semantic.attention[300],
    default: semantic.neutral[200],
    light: semantic.neutral[100],
    disabled: semantic.neutral[100],
    hover: semantic.neutral[400],
    invalid: semantic.warning[300],
    info: semantic.info[300],
    focus: semantic.info[600], // Should always be accompanied by a focus ring
    success: semantic.success[300],
    warning: semantic.warning[300],
  },
  icon: {
    accent: semantic.accent[500],
    attention: semantic.attention[500],
    default: semantic.neutral[500],
    link: semantic.info[500],
    success: semantic.success[500],
    warning: semantic.warning[500],
  },
  text: {
    default: semantic.neutral[800],
    primary: semantic.neutral[800],

    disabled: semantic.neutral[300],
    placeholder: semantic.neutral[500],
    secondary: semantic.neutral[600],
    emphasized: semantic.neutral[900],

    link: semantic.info[600],
    info: semantic.info[600],
    attention: semantic.attention[600],
    accent: semantic.accent[600],
    success: semantic.success[600],
    warning: semantic.warning[600],

    white: white.white,

    /**
     * @deprecated
     * Use `warning` instead.
     */
    danger: semantic.warning[600],
  },

  /**
   * @deprecated
   * Use equivalent values from the `tokens` object.
   * These are used as text colors and should be shades of 500 or higher to meet contrast ratios.
   *
   * @todo Replace `border` with `borders.light`
   * @todo Map remaining values to new tokens
   */
  legacy: {
    focus: semantic.info[300],
    attention: semantic.attention[500],
    danger: semantic.warning[500],
    info: semantic.info[600],
    primary: semantic.neutral[800],
    secondary: semantic.neutral[600],
    success: semantic.success[500],
    good: semantic.success[500],
    warn: semantic.attention[500],
    bad: semantic.warning[500],
    notice: semantic.info[500],
    border: semantic.neutral[200],
  },
};

export const baseColors = {
  // Literal colors
  blue,
  gray,
  green,
  indigo,
  red,
  yellow,
  ...white,

  // Overlays
  darkOverlay,
  lightOverlay,

  /**
   * Included here to make sure types in [this file](apps/visage/src/components/common/theme.ts) don't need to be rewritten.
   * @todo Clean up that types file and deprecate legacy tokens.
   * */
  ...tokens.legacy,
} as const;

const getEntries = (o: any, prefix = ""): String[] =>
  Object.entries(o).flatMap(([k, v]) =>
    Object(v) === v ? getEntries(v, `${prefix}${k}.`) : [`${prefix}${k}`]
  );

export const baseColorsTokenList = getEntries(baseColors);

const dataViz = {
  red: {
    guava: "#E16363",
  },
  yellow: {
    mango: "#F6C07A",
  },
  green: {
    teal: "#7DCABB",
    olive: "#6D847F",
  },
  blue: {
    blueberry: "#6883AB",
  },
  purple: {
    eggplant: "#70608A",
    lilac: "#A57EE3",
  },
};

// For a full list, see https://brand-access.webflow.io/color.
const brand = {
  accent: {
    aquaObscura: "#046663",
  },
};

const colors = {
  ...baseColors,
  ...semantic,
  ...tokens,
  dataViz,
  brand,
} as const;

export default colors;
