/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by Spencer Dean.
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: [0, 0, 3] }}
          href="https://github.com/spencerrdean/spencedean-2022"
        >
          View source code on GitHub.
        </Link>
      </div>
    </footer>
  )
}

export default Footer
