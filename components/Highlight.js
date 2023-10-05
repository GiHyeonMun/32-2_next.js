/*import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

function highlight({code, language = 'js'}) {
    const { asPath } = useRouter();

    useEffect(() => {
        hljs.registerLanguage('javascript', javascript);
        hljs.initHighlighting();
    }, [asPath]);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="@/highlight.css" />
            </Head>
            <pre>
                <code className={language}>{code}</code>
            </pre>
        </>
    );
}

export default Highlight;*/

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

export default function Highlight(props) {
  const { asPath } = useRouter();

  useEffect(() => {
    hljs.registerLanguage(props.language, javascript);
    hljs.initHighlighting();
  }, [asPath]);

  return (
    <>
      <Head>          
        <link rel="stylesheet" href="highlight.css" />
      </Head>
      <pre>
        <code className={props.language}>{props.children}</code>
      </pre>
    </>
  );
}