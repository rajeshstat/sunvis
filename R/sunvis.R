#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
sunvis <- function(csvdata, width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = list(
    csvdata = csvdata
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'sunvis',
    x,
    width = width,
    height = height,
    package = 'sunvis',
    elementId = elementId
  )
}

#' Shiny bindings for sunvis
#'
#' Output and render functions for using sunvis within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a sunvis
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name sunvis-shiny
#'
#' @export
sunvisOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'sunvis', width, height, package = 'sunvis')
}

#' @rdname sunvis-shiny
#' @export
renderSunvis <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, sunvisOutput, env, quoted = TRUE)
}
