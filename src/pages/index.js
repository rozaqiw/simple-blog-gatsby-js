import React, { Component } from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
// import projects from '../../data/projects'
// import quotes from '../../data/quotes'
import yuant from '../images/pp.png'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – IT Enthusiast`} />
        <SEO />
        <div className="container">
          <div className="lead">
	 <div className="elevator">
              <h2>Halo, saya Abdul Rozaqi</h2>
              <p>
		Saya memiliki latar belakang Sistem Informatika Jaringan dan Aplikasi di SMK, saat ini tertarik dengan banyak hal dibidang IT, diantaranya : Cloud Computing, Cyber Security, dan Programming. Situs ini berisi artikel yang ingin saya bagikan tentang IT.
              </p>
              {/*<div className="social-buttons">*/}
              {/*  <GitHubButton*/}
              {/*    href="https://github.com/ytxgit"*/}
              {/*    data-size="large"*/}
              {/*    data-show-count="false"*/}
              {/*  >*/}
              {/*    ytxgit*/}
              {/*  </GitHubButton>*/}
              {/*</div>*/}
{/*	    <div className="newsletter-section"> 
              <img src={yuant} className="newsletter-avatar" alt="yuant" />
              </div>*/}
          </div>
	</div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Latest Articles
              <Link to="/blog" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

{/*          <section className="section">
            <h2>
              Most Popular
              <Link to="/categories/popular" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>
*/}

          {/*<section className="section">*/}
          {/*  <h2>Open Source Projects</h2>*/}
          {/*  <ProjectListing projects={projects} />*/}
          {/*</section>*/}

          {/*<section className="section">*/}
          {/*  <h2>{`Other People's Opinions`}</h2>*/}
          {/*  <div className="quotations">*/}
          {/*    {quotes.map(quote => (*/}
          {/*        <blockquote className="quotation" key={quote.name}>*/}
          {/*          <p>{quote.quote}</p>*/}
          {/*          <cite>— {quote.name}</cite>*/}
          {/*        </blockquote>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</section>*/}
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 10
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 9
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
