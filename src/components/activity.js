import React from "react";

import { connect } from "react-redux";

import { nap, eat, play } from "../redux/actions/activity";

const Activity = ({ activity, nap, eat, play }) => {
    return (
        <div>
            <h2>The cat is {activity}</h2>
            <button onClick={() => nap()}>Napping</button>
            <button onClick={() => eat()}>Eating</button>
            <button onClick={() => play()}>Playing</button>
        </div>
    );
};

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
};

const mapDispatchToProps = dispatch => {
    return {
        nap: () => dispatch(nap()),
        eat: () => dispatch(eat()),
        play: () => dispatch(play())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Activity);
