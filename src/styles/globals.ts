import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'Fixedsys Excelsior';
    src: url('/FSEX302.ttf') format('truetype');
    }  

    body,
    html {
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        scroll-behavior: smooth;
        font-size: 18px;

        
        @media (max-width: 720px) {
            font-size: 16px;
        }
        line-height: 1.5;

        font-family: "Fixedsys Excelsior", monospace;

        cursor: url("/icons/cursors/Cursor.svg"), default;
    }

    *{
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 25px;
        border: 2px solid ${({ theme }) => theme.colors.black};
    }
    ::-webkit-scrollbar-track {
        background-image: url("/pattern/scroll.svg");
        background-repeat: repeat-y;
        background-size: auto 20px;
        background-position: center;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.black};
    }
    //up
    ::-webkit-scrollbar-button:single-button:vertical:decrement {
        background-image: url("icons/arrows/arrow/up.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        border: 2px solid ${({ theme }) => theme.colors.black};

        height: 35px;
    }
    /* Down */
    ::-webkit-scrollbar-button:single-button:vertical:increment {
        background-image: url("icons/arrows/arrow/down.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        border: 2px solid ${({ theme }) => theme.colors.black};

        height: 35px;
    }

    .button{
        all: unset;

        background-image: url("/buttons/button/Default.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        min-height: 20px;
        min-width: 60px;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 16px 32px;

        font-size: 1rem;

        &:hover{
            cursor: url("/icons/cursors/touchCursor.svg"), default;
            background-image: url("/buttons/button/Hover.svg");
        }

        &:focus{
            background-image: url("/buttons/button/Focus.svg");
        }
    }

    p {
        font-size: 1rem;
        line-height: 1.5;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.3;
    }
    h1 {
        font-size: 1.8rem;
    }
    h2 {
         font-size: 1.6rem;
    }
    h3 {
        font-size: 1.42rem;
    }
    h4 {
        font-size: 1.26rem;
    }
    h5 {
        font-size: 1.11rem;
    }
    h6 {
        font-size: 0.875rem;
    }
`;

export { GlobalStyles };
