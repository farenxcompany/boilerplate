import { Box, Flex, Heading, Text, Container, Image } from '@chakra-ui/react';

const libs = [
	'React ^19',
	'Next.js ^15',
	'TypeScript',
	'TailwindCSS',
	'ESLint',
	'Prettier',
	'Chakra UI - V3',
	'Husky',
	'Vitest',
	'Axios',
];

export default function Home() {
	return (
		<Box minH="100vh" bg="black" color="white">
			<Flex
				as="header"
				justifyContent="center"
				py={10}
				bg="#1a1a1a"
				shadow="md"
			>
				<Image
					src="/next.svg"
					alt="Next.js logo"
					width="180px"
					height="38px"
					objectFit="contain"
					filter="invert(1)"
				/>
			</Flex>

			<Container as="main" py={16} px={8} maxW="4xl" centerContent>
				<Heading
					as="h1"
					fontSize={{ base: '4xl', sm: '5xl' }}
					fontWeight="extrabold"
					textAlign="center"
					mb={8}
					color="gray.100"
				>
					Bem-vindo ao Boilerplate FarenX
				</Heading>

				<Text
					fontSize={{ base: 'lg', sm: 'xl' }}
					textAlign="center"
					maxW="2xl"
					mb={12}
					lineHeight="relaxed"
					color="gray.300"
				>
					Este é um projeto inicial que serve como base para o desenvolvimento
					de aplicações utilizando Next.js. Um boilerplate contém configurações,
					ferramentas e bibliotecas pré-configuradas para agilizar o processo de
					desenvolvimento, garantindo um padrão consistente e uma base sólida
					para sua aplicação.
				</Text>

				<Box
					w="full"
					bg="#1a1a1a"
					shadow="md"
					rounded="lg"
					p={6}
					border="1px"
					borderColor="gray.700"
				>
					<Heading
						as="h2"
						fontSize="2xl"
						fontWeight="semibold"
						mb={4}
						textAlign="center"
						color="gray.100"
					>
						Bibliotecas incluídas neste projeto
					</Heading>
					<Box as="ul" gap={2} fontSize="lg" color="gray.300">
						{libs.map((lib) => (
							<Box
								as="li"
								key={lib}
								_hover={{ color: 'white', fontWeight: 'semibold' }}
								transition="all 0.2s"
							>
								{lib}
							</Box>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
