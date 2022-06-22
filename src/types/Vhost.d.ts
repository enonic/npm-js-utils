export type Vhost = {
	name :string
	source :string
	target :string
	host :string
	defaultIdProviderKey :string
	idProviderKeys :Array<{
		idProviderKey :string
	}>
}
