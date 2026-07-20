/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    primary: "#E63946",
    secondary: "#FF8891",
    neutral: "#6A6A6A",
    white: "#FFFFFF"
  },
  dark: {
    primary: "#E63946",
    secondary: "#FF8891",
    neutral: "#6A6A6A",
    white: "#FFFFFF"
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const IconSizes = {
  small: 20,
  medium: 24,
  large: 28,
} as const;

export const Shadows = {
  raised: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
} as const;

export const Opacity = {
  pressed: 0.7,
  disabled: 0.4,
} as const;

export const FontSizes = {
  small: 12,
  label: 14,
  body: 18,
  title: 24,
  heading: 30,
} as const;

export const FontWeights = {
  regular: '400',
  medium: '500',
  bold: '700',
} as const;

export const BorderRadius = {
  small: 8,
  medium: 20,
  large: 24,
  full: 999,
} as const;

export const IconSizes = {
  small: 16,
  medium: 24,
  large: 28,
} as const;

export const Shadows = {
  raised: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
} as const;

export const Opacity = {
  pressed: 0.7,
  disabled: 0.4,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
