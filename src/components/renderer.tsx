import React from 'react';

import { startEngine } from '../engine';


class Renderer extends React.Component {
    canvasId = "canvas"

    componentDidMount() {
        startEngine(this.canvasId)
    }

    render() {
        const { width, height } = getWindowDimensions()

        return (
            <canvas width={width} height={height} id={this.canvasId} />
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
