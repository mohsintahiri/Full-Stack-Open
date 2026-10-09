const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer = (favorite, item) => {
    return favorite.likes >= item.likes 
      ? favorite 
      : item
  }
  return blogs.reduce(reducer).likes
}

const mostBlogs = (blogs) => {
  const result = blogs.reduce(
    (accumulator, item) => {
      const author = item.author

      accumulator.counts[author] =
        (accumulator.counts[author] || 0) + 1

      if (accumulator.counts[author] > accumulator.topAuthor.blogs) {
        accumulator.topAuthor = {
          author: author,
          blogs: accumulator.counts[author]
        }
      }

      return accumulator
    },
    {
      counts: {},
      topAuthor: {
        author: null,
        blogs: 0
      }
    }
  )

  return result.topAuthor
}

module.exports = {
  totalLikes,
  favoriteBlog,
  mostBlogs
}