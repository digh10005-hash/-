export default async (request, context) => {
  // 국가 정보가 없거나 한국(KR)이 아닐 경우 차단
  if (context.geo?.country?.code !== 'KR') {
    return new Response('국내에서만 접속 가능한 페이지입니다. (Access Denied)', { 
      status: 403,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
};

// 적용할 경로를 파일 안에 직접 선언 (netlify.toml 역할 대신 수행)
export const config = {
  path: "/*"
};