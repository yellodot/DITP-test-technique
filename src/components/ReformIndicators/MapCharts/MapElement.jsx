import React from 'react'
import Vue from "https://unpkg.com/vue@3"
import { VueWrapper } from 'vuera'
import MapChart from './MapChart.vue';
import { VueInReact } from "vuera";

// eslint-disable-next-line import/no-anonymous-default-export
const Component = VueInReact(MapChart);

export default () => (
    
    <div>
      <MapChart
      />
    </div>
)