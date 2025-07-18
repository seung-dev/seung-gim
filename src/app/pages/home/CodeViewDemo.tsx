import {
	SCodeBlock,
	SCodeView,
	SContainer,
	SInlineCode,
	STypography,
} from "../../seung/design";

const sampleCode = `import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary'
}) => {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};`;

const sampleJson = `{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0",
    "typescript": "^4.9.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build"
  }
}`;

const sampleCss = `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}`;

export const CodeViewDemo = () => {
	return (
		<SContainer>
			<div className="py-8 space-y-8">
				<div>
					<STypography
						scale="2xl"
						weight="bold"
						className="mb-4"
					>
						코드 뷰 컴포넌트 데모
					</STypography>
					<STypography
						scale="md"
						className="text-gray-600 mb-8"
					>
						다양한 코드 뷰 및 복사 기능을 제공하는 컴포넌트들입니다.
					</STypography>
				</div>

				{/* SCodeView 예시 */}
				<div className="space-y-4">
					<STypography
						scale="xl"
						weight="medium"
					>
						SCodeView - 완전한 코드 뷰어
					</STypography>
					<STypography
						scale="sm"
						className="text-gray-600"
					>
						제목, 라인 번호, 복사 버튼, 언어 표시 등이 포함된 완전한 코드
						뷰어입니다.
					</STypography>

					<SCodeView
						code={sampleCode}
						language="typescript"
						title="React Button Component"
						showLineNumbers={true}
						showCopyButton={true}
						rounded="lg"
						shadow="md"
					/>
				</div>

				{/* JSON 예시 */}
				<div className="space-y-4">
					<STypography
						scale="xl"
						weight="medium"
					>
						JSON 코드 뷰
					</STypography>

					<SCodeView
						code={sampleJson}
						language="json"
						title="package.json"
						showLineNumbers={false}
						rounded="md"
					/>
				</div>

				{/* CSS 예시 */}
				<div className="space-y-4">
					<STypography
						scale="xl"
						weight="medium"
					>
						CSS 코드 뷰
					</STypography>

					<SCodeView
						code={sampleCss}
						language="css"
						title="styles.css"
						rounded="lg"
						shadow="sm"
					/>
				</div>

				{/* SCodeBlock 예시 */}
				<div className="space-y-4">
					<STypography
						scale="xl"
						weight="medium"
					>
						SCodeBlock - 간단한 코드 블록
					</STypography>
					<STypography
						scale="sm"
						className="text-gray-600"
					>
						복사 기능 없이 간단한 코드 블록을 표시합니다.
					</STypography>

					<SCodeBlock
						code="console.log('Hello, World!');"
						language="javascript"
					/>
				</div>

				{/* SInlineCode 예시 */}
				<div className="space-y-4">
					<STypography
						scale="xl"
						weight="medium"
					>
						SInlineCode - 인라인 코드
					</STypography>
					<STypography
						scale="sm"
						className="text-gray-600"
					>
						문장 중간에 코드를 표시할 때 사용합니다.
					</STypography>

					<div className="space-y-2">
						<STypography>
							React에서 컴포넌트를 만들 때는 <SInlineCode code="React.FC" />{" "}
							타입을 사용할 수 있습니다.
						</STypography>
						<STypography>
							함수형 컴포넌트는 <SInlineCode code="const Component = () => {}" />{" "}
							형태로 작성합니다.
						</STypography>
						<STypography>
							상태 관리를 위해 <SInlineCode code="useState" /> 훅을 사용합니다.
						</STypography>
					</div>
				</div>

				{/* 다양한 옵션 예시 */}
				<div className="space-y-4">
					<STypography
						scale="xl"
						weight="medium"
					>
						다양한 옵션 조합
					</STypography>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<SCodeView
							code="npm install react"
							language="bash"
							title="패키지 설치"
							showLineNumbers={false}
							rounded="full"
						/>

						<SCodeView
							code="git commit -m 'feat: add new feature'"
							language="bash"
							title="Git 커밋"
							showLineNumbers={false}
							rounded="full"
						/>
					</div>
				</div>
			</div>
		</SContainer>
	);
};
