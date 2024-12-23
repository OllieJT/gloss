export function formatPrefix(prefix: string) {
	return (
		prefix
			.trim()
			// remove all leading and trailing slashes
			.replace(/^\/+|\/+$/g, '')
			// remove all double slashes
			.replace(/\/+/g, '/')
	);
}

export function formatComponentId(id: string) {
	return id.normalize('NFC').toLowerCase().trim().replaceAll(/\s+/g, '-');
}
