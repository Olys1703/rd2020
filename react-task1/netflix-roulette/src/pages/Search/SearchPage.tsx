import React from 'react';
import { Header } from '../../components/Header/Header';
import ListMovieCards from '../../components/ListMovieCards/ListMovieCards';
import Search from '../../components/Search/Search';
import style from './searchPage.module.scss';
import Loader from '../../components/Loader/Loader';
import { connect } from 'react-redux';

export class SearchPage extends React.Component<any, any> {
  render() {
    return (
      <>
        <Header serchLinkHidden={true} favoriteLinkHidden={false}>
          <Search />
        </Header>
        <main className={style.main}>
          {!this.props.loading ? <ListMovieCards /> : <Loader />}
        </main>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loading: state.app.loading,
});
export default connect(mapStateToProps, null)(SearchPage);
