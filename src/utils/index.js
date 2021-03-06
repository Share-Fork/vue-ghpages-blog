/**
 * Reduce your object
 *
 * @export
 * @param {object} obj
 * @param {array} scopeArr
 * @returns a reduced object
 */
export function objReduce (obj, scopeArr) {
  return Object.keys(obj)
    .filter(el => scopeArr.indexOf(el) !== -1)
    .reduce((res, key) => {
      res[key] = obj[key]
      return res
    }, {})
}

/**
 * get title from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlyTitle (title) {
  return title.replace(/\.md$/, '')
              .replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '')
}

/**
 * get publish date from file name
 *
 * @export
 * @param {any} title
 * @returns
 */
export function onlyDate (title) {
  return /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)[0]
}
