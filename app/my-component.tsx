function MyComponent(props: MyComponentProps) {
    return <div className="text-xl">Hello {props.name}</div>;
}

export interface MyComponentProps {
    name: string;
}

export default MyComponent;