import React from 'react';

import { startEngine } from '../engine';
import { CANVAS_SCALE } from '../constants';


class Renderer extends React.Component {
    canvasId = "canvas"
    canvasRef: React.RefObject<HTMLCanvasElement>

    componentDidMount() {
        startEngine(this.canvasId)
    }

    render() {
        const { width, height } = getWindowDimensions()

        return (
            <canvas
                id={this.canvasId}
                ref={this.canvasRef}
                width={`${width * CANVAS_SCALE}px`}
                height={`${height * CANVAS_SCALE}px`}
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                }}

            />
        );
    }
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default Renderer;
