import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://bizoe.tech/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Navigate to ChatGPT China
            </a>
            <a
              href={`https://blog.bizoe.tech/posts/chatgpt-china-cn`}
              className="mx-3 font-bold hover:underline"
            >
              中文版使用说明
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
