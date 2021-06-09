import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import jest from "jest";

describe("ProfileStatus component", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus isAuth={true} status="text" saveStatus={mockCallback}/>);
    test("status from props should be in the state", () => {
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Status");
    });
    test("after creation <span> should be displayed", () => {
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });
    test("after creation <span> should be displayed with correct status", () => {
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("text");
    });
    test("input should be displayed in editMode instead of <span>", () => {
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("text");
    });
    test("callback should be celled", () => {
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})