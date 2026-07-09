import './Profile.css'

const PROFILE = {
  name: '홍길동',
  phone: '010-1234-5678',
  email: 'abcd@abcd.com',
}

export default function Profile() {
  return (
    <footer className="profile">
      <div className="profile__inner">
        <p className="eyebrow profile__eyebrow">Profile</p>
        <div className="profile__card">
          <div className="profile__avatar" aria-hidden="true">
            {PROFILE.name.charAt(0)}
          </div>
          <div className="profile__info">
            <p className="profile__name">{PROFILE.name}</p>
            <dl className="profile__meta">
              <div className="profile__meta-row">
                <dt>전화</dt>
                <dd>{PROFILE.phone}</dd>
              </div>
              <div className="profile__meta-row">
                <dt>이메일</dt>
                <dd>{PROFILE.email}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </footer>
  )
}
