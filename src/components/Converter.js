class Converter {
	static convertMoviesToTiles = (movies) => {
		return movies.map(m => {
			return {id: m.id, title: m.original_title, desc: m.tagline, banner: m.backdrop_path, type: 'movie'}
		})
	}

	static convertShowsToTiles = (movies) => {
		return movies.map(m => {
			return {id: m.id, title: m.name, desc: m.overview, banner: m.backdrop_path, type: 'tv'}
		})
	}

	static convertToTile = (type, watchable) => {
		return {id: watchable.id, title: type === 'tv' ? watchable.name : watchable.original_title, desc: type === 'tv' ? watchable.overview : watchable.tagline, banner: watchable.backdrop_path, type: type, overview: watchable.overview}
	}
}

export default Converter
