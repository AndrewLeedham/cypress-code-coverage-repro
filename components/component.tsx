import _ from 'lodash';

export default function Component() {
    return <h1>{_.words('Hello World!').join('-').toLowerCase()}</h1>;
}