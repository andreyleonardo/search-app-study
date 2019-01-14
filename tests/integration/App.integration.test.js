import React from 'react';
import App from '../../src/app/App';
import dataStub from '../../src/data.json';
import i18n from '../../src/i18n';

describe('App Integration', () => {
  let app;
  beforeEach(() => {
    app = mount(<App />);
  });
  it('updates results state when a search is made', () => {
    const query = dataStub.tours[0].title;

    expect(app.state().results).toHaveLength(0);

    app.find('input#search-input-id').simulate('change', { target: { value: query } });

    expect(app.state().results).toHaveLength(1);
  });

  it('renders SearchResults as the same quantity of results found', () => {
    const query = dataStub.tours[0].title;

    expect(app.state().results).toHaveLength(0);
    expect(app.find('SearchResult')).toHaveLength(0);

    app.find('input#search-input-id').simulate('change', { target: { value: query } });

    const expectedLength = 1;

    expect(app.find('SearchResult').length).toBeGreaterThanOrEqual(expectedLength);
  });

  it('does not renders SearchResults when query length is less or equal 2', () => {
    const query = 'be';

    app.find('input#search-input-id').simulate('change', { target: { value: query } });

    expect(app.find('SearchResult')).toHaveLength(0);
  });

  it('submits a form calling handleSubmit that calls findTours with default state', () => {
    const query = dataStub.tours[0].title;
    const handleSubmitSpy = jest.spyOn(App.prototype, 'handleSubmit');
    const findToursSpy = jest.spyOn(App.prototype, 'findTours');

    app = mount(<App />);

    app.setState({ query });

    app.find('form#search-form-id').simulate('submit', { preventDefault: jest.fn() });

    expect(handleSubmitSpy).toHaveBeenLastCalledWith();
    expect(findToursSpy).toHaveBeenLastCalledWith(query);
  });

  it('calls handleSubmit with a new query when input changes', () => {
    const query = dataStub.tours[0].title;
    const handleSubmitSpy = jest.spyOn(App.prototype, 'handleSubmit');

    app = mount(<App />);

    app.find('input#search-input-id').simulate('change', { target: { value: query } });

    expect(handleSubmitSpy).toHaveBeenCalledWith({ query });
  });

  it('calls findTours with a new query when input changes', () => {
    const query = dataStub.tours[0].title;
    const findToursSpy = jest.spyOn(App.prototype, 'findTours');

    app = mount(<App />);

    app.find('input#search-input-id').simulate('change', { target: { value: query } });

    expect(findToursSpy).toHaveBeenCalledWith(query);
  });

  it('changes application language', () => {
    const initialLocale = 'en-US';
    let messages = i18n.getMessagesByLocale(initialLocale);

    expect(app.state().selectedLanguage).toBe(initialLocale);
    expect(app.find('Header').text()).toContain(messages['header.title']);

    app.find('LanguageSelector').setState({ displayOptions: true });
    app.find('LanguageOptions').find('#pt').simulate('click');

    const expectedLocale = 'pt-BR';
    messages = i18n.getMessagesByLocale(expectedLocale);

    expect(app.state().selectedLanguage).toBe(expectedLocale);
    expect(app.find('Header').text()).toContain(messages['header.title']);
  });
});
