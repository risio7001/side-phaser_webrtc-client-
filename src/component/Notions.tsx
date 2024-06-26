import React, { useState, useEffect, CSSProperties } from "react";

interface NotionsProps {
  data?: {};
}

const defaultStyle: CSSProperties = {};

const Notions: React.FC<NotionsProps> = ({ data }) => {
  return (
    <>
      <div className="h-[80vh] w-[80vw] bg-red-100">
        <iframe
          srcDoc={`<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>시작하기</title><style>
        /* cspell:disable-file */
        /* webkit printing magic: print all background colors */
        html {
            -webkit-print-color-adjust: exact;
        }
        * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact;
        }

        html,
        body {
            background-color: white;
            margin: 0;
            padding: 0;
        }
        @media only screen {
            body {
                margin: 2em auto;
                max-width: 900px;
                color: rgb(55, 53, 47);
            }
        }

        body {
            line-height: 1.5;
            white-space: pre-wrap;
        }

        a,
        a.visited {
            color: inherit;
            text-decoration: underline;
        }

        .pdf-relative-link-path {
            font-size: 80%;
            color: #444;
        }

        h1,
        h2,
        h3 {
            letter-spacing: -0.01em;
            line-height: 1.2;
            font-weight: 600;
            margin-bottom: 0;
        }

        .page-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 0.75em;
        }

        h1 {
            font-size: 1.875rem;
            margin-top: 1.875rem;
        }

        h2 {
            font-size: 1.5rem;
            margin-top: 1.5rem;
        }

        h3 {
            font-size: 1.25rem;
            margin-top: 1.25rem;
        }

        .source {
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 1.5em;
            word-break: break-all;
        }

        .callout {
            border-radius: 3px;
            padding: 1rem;
        }

        figure {
            margin: 1.25em 0;
            page-break-inside: avoid;
        }

        figcaption {
            opacity: 0.5;
            font-size: 85%;
            margin-top: 0.5em;
        }

        mark {
            background-color: transparent;
        }

        .indented {
            padding-left: 1.5em;
        }

        hr {
            background: transparent;
            display: block;
            width: 100%;
            height: 1px;
            visibility: visible;
            border: none;
            border-bottom: 1px solid rgba(55, 53, 47, 0.09);
        }

        img {
            max-width: 100%;
        }

        @media only print {
            img {
                max-height: 100vh;
                object-fit: contain;
            }
        }

        @page {
            margin: 1in;
        }

        .collection-content {
            font-size: 0.875rem;
        }

        .column-list {
            display: flex;
            justify-content: space-between;
        }

        .column {
            padding: 0 1em;
        }

        .column:first-child {
            padding-left: 0;
        }

        .column:last-child {
            padding-right: 0;
        }

        .table_of_contents-item {
            display: block;
            font-size: 0.875rem;
            line-height: 1.3;
            padding: 0.125rem;
        }

        .table_of_contents-indent-1 {
            margin-left: 1.5rem;
        }

        .table_of_contents-indent-2 {
            margin-left: 3rem;
        }

        .table_of_contents-indent-3 {
            margin-left: 4.5rem;
        }

        .table_of_contents-link {
            text-decoration: none;
            opacity: 0.7;
            border-bottom: 1px solid rgba(55, 53, 47, 0.18);
        }

        table,
        th,
        td {
            border: 1px solid rgba(55, 53, 47, 0.09);
            border-collapse: collapse;
        }

        table {
            border-left: none;
            border-right: none;
        }

        th,
        td {
            font-weight: normal;
            padding: 0.25em 0.5em;
            line-height: 1.5;
            min-height: 1.5em;
            text-align: left;
        }

        th {
            color: rgba(55, 53, 47, 0.6);
        }

        ol,
        ul {
            margin: 0;
            margin-block-start: 0.6em;
            margin-block-end: 0.6em;
        }

        li > ol:first-child,
        li > ul:first-child {
            margin-block-start: 0.6em;
        }

        ul > li {
            list-style: disc;
        }

        ul.to-do-list {
            padding-inline-start: 0;
        }

        ul.to-do-list > li {
            list-style: none;
        }

        .to-do-children-checked {
            text-decoration: line-through;
            opacity: 0.375;
        }

        ul.toggle > li {
            list-style: none;
        }

        ul {
            padding-inline-start: 1.7em;
        }

        ul > li {
            padding-left: 0.1em;
        }

        ol {
            padding-inline-start: 1.6em;
        }

        ol > li {
            padding-left: 0.2em;
        }

        .mono ol {
            padding-inline-start: 2em;
        }

        .mono ol > li {
            text-indent: -0.4em;
        }

        .toggle {
            padding-inline-start: 0em;
            list-style-type: none;
        }

        /* Indent toggle children */
        .toggle > li > details {
            padding-left: 1.7em;
        }

        .toggle > li > details > summary {
            margin-left: -1.1em;
        }

        .selected-value {
            display: inline-block;
            padding: 0 0.5em;
            background: rgba(206, 205, 202, 0.5);
            border-radius: 3px;
            margin-right: 0.5em;
            margin-top: 0.3em;
            margin-bottom: 0.3em;
            white-space: nowrap;
        }

        .collection-title {
            display: inline-block;
            margin-right: 1em;
        }

        .page-description {
            margin-bottom: 2em;
        }

        .simple-table {
            margin-top: 1em;
            font-size: 0.875rem;
            empty-cells: show;
        }
        .simple-table td {
            height: 29px;
            min-width: 120px;
        }

        .simple-table th {
            height: 29px;
            min-width: 120px;
        }

        .simple-table-header-color {
            background: rgb(247, 246, 243);
            color: black;
        }
        .simple-table-header {
            font-weight: 500;
        }

        time {
            opacity: 0.5;
        }

        .icon {
            display: inline-block;
            max-width: 1.2em;
            max-height: 1.2em;
            text-decoration: none;
            vertical-align: text-bottom;
            margin-right: 0.5em;
        }

        img.icon {
            border-radius: 3px;
        }

        .user-icon {
            width: 1.5em;
            height: 1.5em;
            border-radius: 100%;
            margin-right: 0.5rem;
        }

        .user-icon-inner {
            font-size: 0.8em;
        }

        .text-icon {
            border: 1px solid #000;
            text-align: center;
        }

        .page-cover-image {
            display: block;
            object-fit: cover;
            width: 100%;
            max-height: 30vh;
        }

        .page-header-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .page-header-icon-with-cover {
            margin-top: -0.72em;
            margin-left: 0.07em;
        }

        .page-header-icon img {
            border-radius: 3px;
        }

        .link-to-page {
            margin: 1em 0;
            padding: 0;
            border: none;
            font-weight: 500;
        }

        p > .user {
            opacity: 0.5;
        }

        td > .user,
        td > time {
            white-space: nowrap;
        }

        input[type="checkbox"] {
            transform: scale(1.5);
            margin-right: 0.6em;
            vertical-align: middle;
        }

        p {
            margin-top: 0.5em;
            margin-bottom: 0.5em;
        }

        .image {
            border: none;
            margin: 1.5em 0;
            padding: 0;
            border-radius: 0;
            text-align: center;
        }

        .code,
        code {
            background: rgba(135, 131, 120, 0.15);
            border-radius: 3px;
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-size: 85%;
            tab-size: 2;
        }

        code {
            color: #eb5757;
        }

        .code {
            padding: 1.5em 1em;
        }

        .code-wrap {
            white-space: pre-wrap;
            word-break: break-all;
        }

        .code > code {
            background: none;
            padding: 0;
            font-size: 100%;
            color: inherit;
        }

        blockquote {
            font-size: 1.25em;
            margin: 1em 0;
            padding-left: 1em;
            border-left: 3px solid rgb(55, 53, 47);
        }

        .bookmark {
            text-decoration: none;
            max-height: 8em;
            padding: 0;
            display: flex;
            width: 100%;
            align-items: stretch;
        }

        .bookmark-title {
            font-size: 0.85em;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 1.75em;
            white-space: nowrap;
        }

        .bookmark-text {
            display: flex;
            flex-direction: column;
        }

        .bookmark-info {
            flex: 4 1 180px;
            padding: 12px 14px 14px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .bookmark-image {
            width: 33%;
            flex: 1 1 180px;
            display: block;
            position: relative;
            object-fit: cover;
            border-radius: 1px;
        }

        .bookmark-description {
            color: rgba(55, 53, 47, 0.6);
            font-size: 0.75em;
            overflow: hidden;
            max-height: 4.5em;
            word-break: break-word;
        }

        .bookmark-href {
            font-size: 0.75em;
            margin-top: 0.25em;
        }

        .sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
        .code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
        .serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
        .mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
        .pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
        .pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
        .pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
        .pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
        .pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
        .pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
        .pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
        .pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
        .pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
        .pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
        .pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
        .pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
        .pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
        .pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
        .pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
        .pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
        .highlight-default {
            color: rgba(55, 53, 47, 1);
        }
        .highlight-gray {
            color: rgba(120, 119, 116, 1);
            fill: rgba(120, 119, 116, 1);
        }
        .highlight-brown {
            color: rgba(159, 107, 83, 1);
            fill: rgba(159, 107, 83, 1);
        }
        .highlight-orange {
            color: rgba(217, 115, 13, 1);
            fill: rgba(217, 115, 13, 1);
        }
        .highlight-yellow {
            color: rgba(203, 145, 47, 1);
            fill: rgba(203, 145, 47, 1);
        }
        .highlight-teal {
            color: rgba(68, 131, 97, 1);
            fill: rgba(68, 131, 97, 1);
        }
        .highlight-blue {
            color: rgba(51, 126, 169, 1);
            fill: rgba(51, 126, 169, 1);
        }
        .highlight-purple {
            color: rgba(144, 101, 176, 1);
            fill: rgba(144, 101, 176, 1);
        }
        .highlight-pink {
            color: rgba(193, 76, 138, 1);
            fill: rgba(193, 76, 138, 1);
        }
        .highlight-red {
            color: rgba(212, 76, 71, 1);
            fill: rgba(212, 76, 71, 1);
        }
        .highlight-gray_background {
            background: rgba(241, 241, 239, 1);
        }
        .highlight-brown_background {
            background: rgba(244, 238, 238, 1);
        }
        .highlight-orange_background {
            background: rgba(251, 236, 221, 1);
        }
        .highlight-yellow_background {
            background: rgba(251, 243, 219, 1);
        }
        .highlight-teal_background {
            background: rgba(237, 243, 236, 1);
        }
        .highlight-blue_background {
            background: rgba(231, 243, 248, 1);
        }
        .highlight-purple_background {
            background: rgba(244, 240, 247, 0.8);
        }
        .highlight-pink_background {
            background: rgba(249, 238, 243, 0.8);
        }
        .highlight-red_background {
            background: rgba(253, 235, 236, 1);
        }
        .block-color-default {
            color: inherit;
            fill: inherit;
        }
        .block-color-gray {
            color: rgba(120, 119, 116, 1);
            fill: rgba(120, 119, 116, 1);
        }
        .block-color-brown {
            color: rgba(159, 107, 83, 1);
            fill: rgba(159, 107, 83, 1);
        }
        .block-color-orange {
            color: rgba(217, 115, 13, 1);
            fill: rgba(217, 115, 13, 1);
        }
        .block-color-yellow {
            color: rgba(203, 145, 47, 1);
            fill: rgba(203, 145, 47, 1);
        }
        .block-color-teal {
            color: rgba(68, 131, 97, 1);
            fill: rgba(68, 131, 97, 1);
        }
        .block-color-blue {
            color: rgba(51, 126, 169, 1);
            fill: rgba(51, 126, 169, 1);
        }
        .block-color-purple {
            color: rgba(144, 101, 176, 1);
            fill: rgba(144, 101, 176, 1);
        }
        .block-color-pink {
            color: rgba(193, 76, 138, 1);
            fill: rgba(193, 76, 138, 1);
        }
        .block-color-red {
            color: rgba(212, 76, 71, 1);
            fill: rgba(212, 76, 71, 1);
        }
        .block-color-gray_background {
            background: rgba(241, 241, 239, 1);
        }
        .block-color-brown_background {
            background: rgba(244, 238, 238, 1);
        }
        .block-color-orange_background {
            background: rgba(251, 236, 221, 1);
        }
        .block-color-yellow_background {
            background: rgba(251, 243, 219, 1);
        }
        .block-color-teal_background {
            background: rgba(237, 243, 236, 1);
        }
        .block-color-blue_background {
            background: rgb(46, 112, 141);
        }
        .block-color-purple_background {
            background: rgba(244, 240, 247, 0.8);
        }
        .block-color-pink_background {
            background: rgba(249, 238, 243, 0.8);
        }
        .block-color-red_background {
            background: rgba(253, 235, 236, 1);
        }
        .select-value-color-interactiveBlue { background-color: rgba(35, 131, 226, .07); }
        .select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
        .select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
        .select-value-color-green { background-color: rgba(219, 237, 219, 1); }
        .select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
        .select-value-color-translucentGray { background-color: rgba(255, 255, 255, 0.0375); }
        .select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
        .select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
        .select-value-color-red { background-color: rgba(255, 226, 221, 1); }
        .select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
        .select-value-color-blue { background-color: rgba(211, 229, 239, 1); }
        .select-value-color-pageGlass { background-color: undefined; }
        .select-value-color-washGlass { background-color: undefined; }

        .checkbox {
            display: inline-flex;
            vertical-align: text-bottom;
            width: 16;
            height: 16;
            background-size: 16px;
            margin-left: 2px;
            margin-right: 5px;
        }

        .checkbox-on {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
        }

        .checkbox-off {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
        }

        </style></head><body>
            <!-- <iframe src="https://home-test.notion.site/08ecddbf0d184281ad18f13b5f30cb5f?pvs=4"></iframe> -->
            <article id="08ecddbf-0d18-4281-ad18-f13b5f30cb5f" class="page sans"><header><h1 class="page-title">시작하기</h1><p class="page-description"></p></header><div class="page-body"><p id="58fde6b5-c9bf-4fb6-9800-10bb2c41124c" class="">👋 Notion에 오신 것을 환영합니다!</p><p id="b8539115-4d38-4cce-96bf-6d6bbcc950aa" class="">
        </p><p id="49c6f9fd-907c-4841-892c-52af95fe8ec6" class="">기본 사항은 다음과 같습니다.</p><ul id="cb41ae85-41b0-4292-ba33-9f68b2dd074c" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">아무 곳이나 클릭하고 입력을 시작합니다.</span><div class="indented"></div></li></ul><ul id="614dd145-a998-469a-995c-d9dff894a84f" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked"><code>/</code>를 누르면 추가할 수 있는 모든 유형의 콘텐츠(제목, 동영상, 하위 페이지 등)를 볼 수 있습니다.</span><div class="indented"><figure id="ff81b991-94ff-4e01-86bd-686b5354c5f8" class="link-to-page"><a href="https://www.notion.so/ff81b99194ff4e0186bd686b5354c5f8?pvs=21">하위 페이지 예시</a></figure></div></li></ul><ul id="211c6b4b-39c7-4e9a-8f82-eb1e064ad197" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">텍스트를 강조 표시하면 나타나는 메뉴를 사용하여 <a href="https://www.notion.so/product">자신이</a> <mark class="highlight-yellow_background">원하는</mark> <code>모든</code> <strong>방식으로</strong> <em>쓰기</em> <del>스타일을 지정해 보세요.</del></span><div class="indented"></div></li></ul><ul id="21925c60-66c6-4ece-a0d6-175404deb0cb" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">체크박스 위에 마우스 커서를 올리면 왼쪽에 <code>⋮⋮</code> 아이콘이 표시됩니다. 해당 아이콘을 클릭한 상태로 다른 곳으로 끌어 놓을 수 있습니다.</span><div class="indented"></div></li></ul><ul id="c9ffe7f5-5420-479e-a07c-f8c976be4652" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">사이드바 하단의 <code>+ 새 페이지</code> 버튼을 클릭하여 새 페이지를 추가합니다.</span><div class="indented"></div></li></ul><ul id="32730bb8-ceff-4c23-acdc-090036aca22c" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">사이드바에서 <code>템플릿</code>을 클릭하면 템플릿으로 페이지를 시작할 수 있습니다.</span><div class="indented"></div></li></ul><ul id="7cc533c9-1893-4c5f-b23e-5db3dbfbefe9" class="toggle"><li><details open=""><summary>이 콘텐츠는 토글 블록입니다. 더 유용한 팁을 보려면 작은 삼각형을 클릭하세요!</summary><ul id="1376162f-e6e9-47a1-88aa-cbbf7d9f243a" class="bulleted-list"><li style="list-style-type:disc"><a href="https://www.notion.so/babb02cbdbd74b168bf58e74eae7e1f6?pvs=21"><mark class="highlight-red">템플릿 갤러리</mark></a>: Notion 커뮤니티가 생성한 추가 템플릿</li></ul><ul id="be0b2738-fbc0-42cb-981c-f69c951ee8e7" class="bulleted-list"><li style="list-style-type:disc"><a href="https://www.notion.so/9afd18e7efe54feba56f48c35a99270b?pvs=21"><mark class="highlight-red">도움말과 지원</mark></a>:<strong> </strong>Notion에 대한 가이드와 자주 묻는 질문(FAQ)</li></ul><ul id="fe28ff3c-9844-4483-902c-f036b4879dc1" class="bulleted-list"><li style="list-style-type:disc">사이드바와 하위 페이지를 사용하여 워크스페이스를 깔끔하게 유지하세요.<figure id="b3dff307-6495-4768-939f-3e48918e2a6a" class="image"><a href="%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%2008ecddbf0d184281ad18f13b5f30cb5f/infinitehierarchynodither.gif"><img style="width:672px" src="%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%2008ecddbf0d184281ad18f13b5f30cb5f/infinitehierarchynodither.gif"/></a></figure></li></ul><p id="6aae4e71-3f57-459d-9847-f53cfa6e6422" class="">
        </p></details></li></ul><p id="aa561549-b0b5-4c3f-8e06-b56b6252a744" class="">
        </p><p id="dd4420c0-a77e-4c57-b1fd-abe8502e8ee6" class="">실행 데모 보기:</p><figure id="d35b851b-33fe-4dfb-8fb6-498d03171937"><div class="source"><a href="https://youtu.be/TL_N2pmh9O0">https://youtu.be/TL_N2pmh9O0</a></div><figcaption>1분</figcaption></figure><p id="505bc51c-9012-40cc-8a61-ed0ca8a16e3a" class="">
        </p><figure id="85f365cb-fec2-450f-99c3-f75773a38663"><div class="source"><a href="https://youtu.be/FXIrojSK3Jo">https://youtu.be/FXIrojSK3Jo</a></div><figcaption>4분</figcaption></figure><p id="ca16ced9-f18a-4a4e-bd54-2372c8037fce" class="">
        </p><figure id="61bfd64c-6156-4161-ae44-1cf199df6208"><div class="source"><a href="https://youtu.be/2Pwzff-uffU">https://youtu.be/2Pwzff-uffU</a></div><figcaption>2분</figcaption></figure><p id="310f9105-eb9e-40e4-8ad0-c163d5829d34" class="">
        </p><figure id="40d4b364-7820-422a-b2ef-2179c943cd5b"><div class="source"><a href="https://youtu.be/O8qdvSxDYNY">https://youtu.be/O8qdvSxDYNY</a></div><figcaption>2분</figcaption></figure><p id="af9c5c83-6a8f-44c4-aaa8-5d4a206fb822" class=""><mark class="highlight-red"><a href="http://youtube.com/c/notion">Notion 유튜브 채널</a></mark>에 오시면 50개 이상의 튜토리얼을 보실 수 있답니다.</p><p id="21424b6c-737e-4f89-8bfb-4ee2bf7de43f" class="">
        </p><p id="4405daca-90d8-4f94-b83e-0aaa141bf772" class="block-color-gray"><mark class="highlight-gray">👉 </mark><mark class="highlight-gray"><strong>질문이 있으신가요? </strong></mark><mark class="highlight-gray">오른쪽 하단의 </mark><mark class="highlight-red"><code>?</code></mark><mark class="highlight-gray">를 클릭하여 더 많은 가이드를 보거나 메시지를 보내세요.</mark></p><p id="255ca0cb-c457-44af-bdca-09f80c1f7fee" class="">
        </p></div></article><span class="sans" style="font-size:14px;padding-top:2em"></span>
    </body></html>`}
          width={"100%"}
          height={"100%"}
          //   src="http://192.168.0.63:5500/index.html"
        ></iframe>
      </div>
    </>
  );
};

export default Notions;
