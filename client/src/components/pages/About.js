import React, {Component} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getArticles } from "../../actions/articleActions";
// components
import Navbar from '../Navbar';
import MainGrid from '../MainGrid';
import Footer from '../Footer';
// Foundation and other styles
import '../styles/about.css';

class About extends Component {
    
    componentDidMount() {
        this.props.getArticles();
    };

    render() {
        return(
            <>
            <Navbar/>
            <MainGrid articles={this.props.articles}/>
            <Footer/>
            </>
        );
    }
}

About.propTypes = {
    getArticles: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired
  };
    
  const mapStateToProps = state => ({ 
    articles: state.articles.items,
    errors: state.errors
  });
    
  export default connect( mapStateToProps, { getArticles } )(About);