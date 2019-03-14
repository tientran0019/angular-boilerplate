import { configure, addDecorator } from "@storybook/angular";

const req = require.context('../src/app/components', true, /\.stories\.ts$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

addDecorator((storyFn) => {
	return storyFn();
});

configure(loadStories, module);
