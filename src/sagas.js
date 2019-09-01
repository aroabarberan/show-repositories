import { call, put, takeEvery } from 'redux-saga/effects'
import { requestRepository, requestRepositorySuccess, requestRepositoryError } from './actions/repositories';


export default function* watchFetchRepository() {
  yield takeEvery('FETCH_REPOSITORIES', fetchRepository);
}


export function* fetchRepository() {
  try {
    yield put(requestRepository());
    const repositories = yield call(() => {
      return fetch('https://api.github.com/repositories')
      .then(res => res.json())
    });
    yield put(requestRepositorySuccess(repositories));
  } catch (error) {
    yield put(requestRepositoryError());
  }
}
