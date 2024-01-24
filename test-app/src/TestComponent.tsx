import React from "react";
import Elem0 from "./assets/elem0.png";
import Elem1 from "./assets/elem1.png";
import Elem2 from "./assets/elem2.png";
import { Button, Calendar, Carousel, DatePicker, Modal, Review, Table } from "./mobrix-ui-preview";

const userIcon = (
    <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0a20 20 0 1 0 0 40 20 20 0 0 0 0-40Zm0 0" fill="#334d5c" />
        <path
            d="M23 35.8c-.3-1.9.8-6 .8-6h-7.3s1.2 4 .8 6c-.1 1-2.4 2.1-4 3a20 20 0 0 0 13.6 0c-1.5-1-3.8-2-4-3Zm0 0"
            fill="#41af87"
        />
        <path
            d="M20 4.8c-6.8 0-15 6.8-12.3 14.6C10.1 26.3 16.3 32 20 32c3.7 0 10-5.8 12.3-12.6C34.9 11.6 26.8 4.8 20 4.8Zm0 0"
            fill="#4abc96"
        />
        <path
            d="M18.8 20s-.4-1.2-1.2-2.4c-1.1-1.6-2.4-2.4-3.9-2.4-1.4 0-2.9.8-4.5 2.4v.2s2 3.1 6 3.1c1.2 0 2.3-.2 3.5-.6 0 0 .1-.2 0-.2Zm0 0"
            fill="#3faa83"
        />
        <path d="M10.1 17.8s2.6 4 7.8 2c0 0-2.4-7.4-7.8-2Zm0 0" fill="#22343d" />
        <path
            d="M13.1 16.6c0 .6 1.7.8 1.8.3 0-.5-1.7-.8-1.8-.3Zm0 0"
            fill="#cbefe1"
        />
        <path
            d="M30.8 17.6c-1.6-1.6-3.1-2.4-4.5-2.4-1.5 0-2.8.8-3.9 2.4a9.1 9.1 0 0 0-1.2 2.5l.1.1c1.2.5 2.3.7 3.4.7 4 0 6-3 6.1-3.1v-.2Zm0 0"
            fill="#3faa83"
        />
        <path
            d="M22.1 19.8c5.2 2 7.8-2 7.8-2-5.4-5.4-7.8 2-7.8 2Zm0 0"
            fill="#22343d"
        />
        <path
            d="M26.9 16.6c-.1-.5-1.8-.2-1.8.3.1.5 1.8.3 1.8-.3Zm0 0"
            fill="#cbefe1"
        />
        <path
            d="M19.3 24.1c-.3 0-.6.2-.6.5s1.2.3 1.2 0-.3-.5-.6-.5Zm1.4 0c-.3 0-.6.2-.6.5s1.2.3 1.2 0-.3-.5-.6-.5Zm1.9 3.9c0 .3-1.2.3-2.7.3-1.5 0-2.7 0-2.7-.3 0-.2 1.2-.3 2.7-.3 1.5 0 2.7 0 2.7.3Zm0 0"
            fill="#329670"
        />
    </svg>
);

const TestComponent = () => {
    const [isVisible, setVisible] = React.useState(false)
    return (
        <Carousel elements={[
            <img alt="" src={Elem0} width="250px" height="250px" />,
            <img alt="" src={Elem1} width="250px" height="250px" />,
            <img alt="" src={Elem2} width="250px" height="250px" />,
        ]} />
    )
}

const rows = [
    ["h1", "h2", "h3", "h3", "h4", "h6", "h7"],
    ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
    ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
    ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
    ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
    ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
]

const TestComponent2 = () => (
    <>
        <Table
            rows={rows}
            onClick={(row, column) => console.log(row, column)}
        />
        <Table
            dark
            rows={rows}
        />
        <Table
            headers
            rows={rows}

        />
        <Table
            dark
            headers
            rows={rows}
        />
        <Calendar />
        <Calendar dark />

        <Calendar fromToday={false} />
        <Calendar fromToday={false} dark />
        <DatePicker />
        <DatePicker dark />
    </>
)

export default TestComponent2