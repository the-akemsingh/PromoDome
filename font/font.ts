import localFont from 'next/font/local';

const CalSansFont = localFont({
    src: './CalSans-Regular.ttf',
    display: 'swap',
    variable: '--font-cal-sans',
});

const TextFonts = { CalSansFont };

export default TextFonts;