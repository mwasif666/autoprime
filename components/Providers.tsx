'use client';

import { ConfigProvider } from 'antd';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: { main: '#6D28D9', dark: '#32158C', light: '#8B3DFF' },
    secondary: { main: '#F22EB7' },
    text: { primary: '#171230', secondary: '#67627A' },
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
  },
  shape: { borderRadius: 10 },
  typography: { fontFamily: 'var(--font-inter), Inter, sans-serif' },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#6D28D9', colorInfo: '#6D28D9', colorText: '#171230', colorTextSecondary: '#67627A', colorBorder: '#EAE7F2', borderRadius: 10, fontFamily: 'var(--font-inter), Inter, sans-serif', controlHeight: 44,
      },
      components: {
        Button: { primaryShadow: '0 10px 24px rgba(82, 45, 170, .18)' },
        Input: { activeBorderColor: '#8B3DFF', hoverBorderColor: '#8B3DFF' },
      },
    }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ConfigProvider>
  );
}
