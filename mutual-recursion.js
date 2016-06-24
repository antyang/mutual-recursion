a = (foo) => {
	if (foo > 20) return foo;
	return b(foo+2);
}

b = (foo) => {
	return c(foo) + 1;
}

c = (foo) => {
	return a(foo*2);
}