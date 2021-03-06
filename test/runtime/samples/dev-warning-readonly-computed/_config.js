export default {
	dev: true,

	test ( assert, component ) {
		try {
			component.set({ foo: 1 });
			throw new Error( 'Expected an error' );
		} catch ( err ) {
			assert.equal( err.message, `<Main$>: Cannot set read-only property 'foo'` );
		}
	}
};